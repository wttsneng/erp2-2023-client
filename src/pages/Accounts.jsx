import { Box, Grid, Autocomplete, TextField, Chip, Stack } from "@mui/material";
import React from "react";
import { MainLayout } from "../layouts";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "../redux/slices/authSlice";
import { socket } from "../core";
import translateSocketRedux from "../data/translateSocketRedux.json";
import {
  selectAccountData,
  selectAccountStatus,
} from "../redux/slices/accountSlice";
import { SocketInput } from "../components";
const top100Films = [
  { label: "The Godfather", id: 1 },
  { label: "Pulp Fiction", id: 2 },
];

export default function Accounts() {
  const dispatch = useDispatch();
  const accountData = useSelector(selectAccountData);
  const accountStatus = useSelector(selectAccountStatus);

  const [nameInput, setNameInput] = React.useState("");
  const [descriptionInput, setDescriptionInput] = React.useState("");
  const [isCurrentNameChanged, setIsCurrentNameChanged] = React.useState(false);
  const [isCurrentDescriptionChanged, setIsCurrentDescriptionChanged] =
    React.useState(false);
  const [editingId, setEditingId] = React.useState(null);

  const handleNameChange = (value) => {
    setNameInput(value);
  };
  const handleDescriptionChange = (value) => {
    setDescriptionInput(value);
  };

  const handleNameBlur = (value) => {
    socket.emit("Accounts|changeTagValue", {
      itemId: editingId,
      attribute: "name",
      value,
    });
    socket.emit("Accounts|changeTagValueEnd", {
      itemId: editingId,
      attribute: "name",
    });
  };

  const handleDescriptionBlur = (value) => {
    socket.emit("Accounts|changeTagValue", {
      itemId: editingId,
      attribute: "description",
      value,
    });
    socket.emit("Accounts|changeTagValueEnd", {
      itemId: editingId,
      attribute: "description",
    });
  };

  const handleNameFocus = () => {
    socket.emit("Accounts|changeTagValueStart", {
      itemId: editingId,
      attribute: "name",
    });
  };

  const handleDescriptionFocus = () => {
    socket.emit("Accounts|changeTagValueStart", {
      itemId: editingId,
      attribute: "description",
    });
  };

  const onTagClick = (tag) => {
    setNameInput(tag.name);
    setDescriptionInput(tag.description);
    setEditingId(tag.id);
  };

  React.useEffect(() => {
    const currentEditItems = accountData?.tags?.find((item) => {
      return item.id === editingId;
    })?.editItems;
    if (currentEditItems && currentEditItems.length > 0) {
      if (currentEditItems.includes("name")) {
        setIsCurrentNameChanged(true);
      }
      if (currentEditItems.includes("description")) {
        setIsCurrentDescriptionChanged(true);
      }
    } else {
      setIsCurrentNameChanged(false);
      setIsCurrentDescriptionChanged(false);
    }
  }, [accountData]);

  React.useEffect(() => {
    socket.onAny((event, args) => {
      if (event.startsWith("Accounts|")) {
        const type = translateSocketRedux[event];
        console.log("type", type);
        if (type) {
          dispatch({ type, payload: args });
        }
      }
    });
  }, []);
  return (
    <div className="">
      <Grid container spacing={2}>
        <Grid item md={8} sx={{}} order={{ xs: 2, md: 1 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              renderInput={(params) => (
                <TextField {...params} label="Tag search" />
              )}
            />
            <Box sx={{ marginTop: 2 }}>
              {accountStatus === "success" &&
                accountData?.tags?.map((item) => {
                  return (
                    <Chip
                      key={item.id}
                      label={item.name}
                      onClick={() => {
                        onTagClick(item);
                      }}
                      onDelete={() => {}}
                      sx={{ marginRight: 1, marginBottom: 1 }}
                    />
                  );
                })}
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: 2,
            }}
          >
            <form>
              <Stack spacing={2}>
                <SocketInput
                  label="name"
                  disabled={isCurrentNameChanged}
                  value={nameInput}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  onFocus={handleNameFocus}
                />
                <SocketInput
                  disabled={isCurrentDescriptionChanged}
                  label="description"
                  value={descriptionInput}
                  onChange={handleDescriptionChange}
                  onBlur={handleDescriptionBlur}
                  onFocus={handleDescriptionFocus}
                />
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
      <button
        onClick={() => {
          dispatch(fetchAuthMe());
        }}
      >
        Редакс
      </button>
      <button
        onClick={() => {
          socket.disconnect();
          socket.connect();
        }}
      >
        Подключить сокеты
      </button>
      <button
        onClick={() => {
          socket.emit("Accounts|getTagList", "testSome Cool Message");
        }}
      >
        getTagList
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";
import { Paper } from "@mui/material";
import debounce from "lodash.debounce";
const PaperComponent = (props) => {
  const [width, setWidth] = useState(props.defaultwidth);
  const [height, setHeight] = useState(props.defaultheight);

  const updateRedux = React.useCallback(
    debounce((size) => {
      props.onresize(null, { size });
    }, 1000),
    []
  );
  const handleResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
    if (props.onresize) {
      updateRedux(size);
    }
  };

  React.useEffect(() => {
    if (props.onResize) {
      props.onresize(null, { size: { width, height } });
    }
  }, []);
  const minConstraints = props.minconstraints || [300, 400];
  const maxConstraints = props.maxconstraints || [Infinity, Infinity];

  return (
    <Draggable handle=".dialog-header" defaultPosition={props.position}>
      <ResizableBox
        width={width}
        height={height}
        minConstraints={minConstraints}
        maxConstraints={maxConstraints}
        onResize={handleResize}
        className="resizable-box"
        resizeHandles={["se"]}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100% !important",
            minWidth: "100%",
            minHeight: "100%",
            margin: "0px !important",
            padding: 0,
          }}
          elevation={0}
        />
      </ResizableBox>
    </Draggable>
  );
};
export default PaperComponent;

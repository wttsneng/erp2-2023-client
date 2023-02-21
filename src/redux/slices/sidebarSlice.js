import { createSlice } from "@reduxjs/toolkit";

function findAndOpenParentElementsById(id, data) {
  let resultObj = null;

  function traverse(elements, parentElements = []) {
    for (const element of elements) {
      if (element.id === id) {
        for (const parentElement of parentElements) {
          parentElement.open = true;
        }
        resultObj = element;
        break;
      } else if (element.items) {
        traverse(element.items, [...parentElements, element]);
      }
    }
  }
  traverse(data);
  return { data, resultObj };
}

function findAndOpenParentElementsByLink(link, data) {
  let resultObj = null;

  function traverse(elements, parentElements = []) {
    for (const element of elements) {
      if (element.link === link) {
        for (const parentElement of parentElements) {
          parentElement.open = true;
        }
        resultObj = element;
        break;
      } else if (element.items) {
        traverse(element.items, [...parentElements, element]);
      }
    }
  }
  traverse(data);
  return { data, resultObj };
}

function findFirstObjectWithLinkAndOpenParents(data) {
  const firstElement = data[0];
  if (!firstElement) return { data, resultObj: null };
  let resultObj = null;

  function traverse(element, parentElements = []) {
    if (element.link) {
      for (const parentElement of parentElements) {
        parentElement.open = true;
      }
      resultObj = element;
    } else if (element.items) {
      for (const childElement of element.items) {
        traverse(childElement, [...parentElements, element]);
        if (resultObj) break;
      }
    }
  }

  traverse(firstElement);

  return { data, resultObj };
}

function findAndOpenParentElements(id, data) {
  let resultObj = null;

  function traverse(element, parentElements = []) {
    if (element.id === id) {
      for (const parentElement of parentElements) {
        parentElement.open = !parentElement.open;
      }
      element.open = !element.open;
      resultObj = element;
    } else if (element.items) {
      for (const childElement of element.items) {
        traverse(childElement, [...parentElements, element]);
        if (resultObj) break;
      }
    }
  }

  for (const element of data) {
    traverse(element);
    if (resultObj) break;
  }

  return { data, resultObj };
}

const initialState = {
  data: [],
  activeId: null,
  activeLink: null,
  activeTitle: null,
  homeLink: null,
  status: "idle", // idle, loading, success, error
};

const sidebar = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarData: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    setSidebarActiveById: (state, action) => {
      const { data, resultObj } = findAndOpenParentElementsById(
        action.payload,
        state.data
      );
      state.data = data;
      state.activeId = resultObj.id;
      state.activeLink = resultObj.link;
      state.activeTitle = resultObj.title;
    },
    setSidebarActiveByLink: (state, action) => {
      const { data, resultObj } = findAndOpenParentElementsByLink(
        action.payload,
        state.data
      );
      state.data = data;
      state.activeId = resultObj.id;
      state.activeLink = resultObj.link;
      state.activeTitle = resultObj.title;
    },
    setSidebarHomeActive: (state) => {
      const { data, resultObj } = findFirstObjectWithLinkAndOpenParents(
        state.data
      );
      state.data = data;
      state.activeId = resultObj.id;
      state.activeLink = resultObj.link;
      state.activeTitle = resultObj.title;
      state.homeLink = resultObj.link;
    },
    setSidebarHomeLink: (state) => {
      const { resultObj } = findFirstObjectWithLinkAndOpenParents(state.data);
      state.homeLink = resultObj.link;
    },
    toggleSidebarElementOpen: (state, action) => {
      const { data } = findAndOpenParentElements(action.payload, state.data);
      state.data = data;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setSidebarData,
  setSidebarActiveById,
  setSidebarActiveByLink,
  setSidebarHomeActive,
  setSidebarHomeLink,
  toggleSidebarElementOpen,
} = sidebar.actions;
export const sidebarReducer = sidebar.reducer;
export const selectSidebarData = (state) => state.sidebar.data;
export const selectSidebarStatus = (state) => state.sidebar.status;
export const selectSidebarActive = (state) => {
  const { activeId, activeLink, activeTitle } = state.sidebar;
  return { activeId, activeLink, activeTitle };
};

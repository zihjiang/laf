import React from "react";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type TLayoutConfig = {
  style: React.CSSProperties;
};

type functionPanel = "SiderBar" | "RightPanel" | "DependencePanel" | "ConsolePanel" | "Bottom";
type collectionPanel = "SiderBar" | "Bottom" | "PolicyPanel";
type page = "functionPage" | "collectionPage";

type State = {
  layoutInfo: {
    functionPage: {
      // eslint-disable-next-line no-unused-vars
      [K in functionPanel]: TLayoutConfig;
    };
    collectionPage: {
      // eslint-disable-next-line no-unused-vars
      [K in collectionPanel]: TLayoutConfig;
    };
  };

  togglePanel: (pageId: page, panelId: functionPanel | collectionPanel) => void;
};

const useCustomSettingStore = create<State>()(
  devtools(
    persist(
      immer((set, get) => ({
        layoutInfo: {
          functionPage: {
            SiderBar: {
              style: {
                width: 300,
              },
            },

            RightPanel: {
              style: {
                width: "350px",
              },
            },

            DependencePanel: {
              style: {
                height: 300,
              },
            },

            ConsolePanel: {
              style: {
                height: 200,
              },
            },
            Bottom: {
              style: {
                height: 40,
              },
            },
          },

          collectionPage: {
            SiderBar: {
              style: {
                width: 300,
              },
            },
            CollectionPanel: {
              style: {},
            },

            PolicyPanel: {
              style: {},
            },
            Bottom: {
              style: {
                height: 40,
              },
            },
          },
        },

        togglePanel: (pageId, panelId) => {
          set((state: any) => {
            const display = state.layoutInfo[pageId];
            state.layoutInfo[pageId][panelId].style.display =
              display[panelId].style.display === "none" ? "block" : "none";
          });
        },
      })),
      { name: "laf_custome_setting" },
    ),
  ),
);

export default useCustomSettingStore;

import { tagAnatomy } from "@chakra-ui/anatomy";
import {
  ComponentStyleConfig,
  createMultiStyleConfigHelpers,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const Tag = defineMultiStyleConfig({
  sizes: {
    sm: definePartsStyle({
      container: {
        px: "1",
        py: "1",
        fontSize: "10",
      },
    }),
  },
  variants: {
    private: definePartsStyle({
      container: {
        borderColor: "blue.500",
        borderWidth: 1,
        color: "blue.700",
      },
    }),
    readonly: definePartsStyle({
      container: {
        borderColor: "purper.500",
        borderWidth: 1,
        color: "purper.700",
      },
    }),
    readwrite: definePartsStyle({
      container: {
        borderColor: "brown.500",
        borderWidth: 1,
        color: "brown.700",
      },
    }),
  },
});

const Button = defineStyleConfig({
  baseStyle: {},
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 2,
      py: 0,
      height: "24px",
      fontWeight: "normal",
    },
    md: {
      fontSize: "md",
      borderRadius: "100px",
      px: 6,
      py: 4,
      height: "32px",
    },
  },

  variants: {
    plain: {
      bg: "gray.200",
      color: "gray.500",
      _hover: {
        bg: "gray.300",
      },
    },

    solid: {
      bg: "primary.500",
      color: "white",
      _hover: {
        bg: "primary.700",
      },
    },

    ghost: {
      color: "primary.500",
      borderRadius: 2,
      _hover: {
        bg: "primary.500",
        color: "white",
        borderRadius: 2,
      },
    },

    grayGhost: {
      color: "#000",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

const Modal = {
  defaultProps: {},
};

const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {},
  },
  sizes: {
    xs: {
      field: {
        borderRadius: "sm",
        fontSize: "xs",
        height: 6,
        paddingX: 2,
      },
    },
    sm: {
      field: {
        borderRadius: "sm",
        fontSize: "sm",
        height: 8,
        paddingX: 3,
      },
    },
    md: {
      field: {
        borderRadius: "md",
        fontSize: "md",
        height: 10,
        paddingX: 4,
      },
    },
    lg: {
      field: {
        borderRadius: "md",
        fontSize: "lg",
        height: 12,
        paddingX: 4,
      },
    },
  },
  variants: {
    outline: {
      field: {
        background: "#fff",
        border: "1px solid",
        borderColor: "transparent",
        _focus: {
          background: "transparent",
          borderColor: "#3182ce",
        },
      },
    },
    filled: {
      field: {
        background: "gray.100",
        border: "1px solid",
        borderColor: "transparent",
        _focus: {
          background: "transparent",
          borderColor: "#3182ce",
        },
      },
    },

    unstyled: {
      field: {
        background: "transparent",
        borderRadius: "md",
        height: "auto",
        paddingX: 0,
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "filled",
  },
};

const Tabs = {
  variants: {
    "soft-rounded": {
      tab: {
        borderRadius: "4px",
        color: "gray.500",
        _selected: {
          color: "gray.800",
          bg: "gray.100",
          borderRadius: "4px",
        },
      },
    },
  },
};

const Table = {
  parts: ["th", "td"],
  baseStyle: {
    th: {
      border: "1px solid #dddddd",
    },
    td: {
      border: "1px solid #dddddd",
    },
  },
};

const theme = extendTheme({
  fontSizes: {
    sm: "12px",
    base: "12px",
    md: "14px",
    lg: "16px",
    xl: "16px",
    "2xl": "18px",
    "3xl": "22px",
  },
  colors: {
    primary: {
      500: "#00A99D",
      700: "#04756D",
    },
    blue: {
      500: "#0C74AE80",
      700: "#0C74AE",
    },
    purper: {
      500: "#A55AC980",
      700: "#A55AC9",
    },
    brown: {
      500: "#BE704580",
      700: "#BE7045",
    },
  },
  components: {
    Button,
    Modal,
    Tag,
    Input,
    Tabs,
    Table,
  },
});
export default theme;

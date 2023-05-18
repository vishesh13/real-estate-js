import { spacing } from "./spacing";
import { colors } from "./colors";
import { textSizes } from "./textSizes";
import { typography } from "./typography";

export const componentStyles = {
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: `0px 5px 15px ${colors.shadow}`,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 100,
        textTransform: "none",
        fontWeight: typography.bold,
        width: "100%",
      },
      text: {
        border: `1px solid ${colors.stroke}`,
      },
      outlined: {
        border: `1px solid ${colors.black}`,
        "&:hover": {
          backgroundColor: colors.black,
          color: colors.white,
          "& .MuiTypography-root": {
            color: colors.white,
          },
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: `0px 5px 15px ${colors.shadow}`,
        border: `1px solid ${colors.stroke}`,
        borderRadius: 6,
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: ({ theme }) => ({
        [theme.breakpoints.down("md")]: {
          paddingLeft: spacing.m,
          paddingRight: spacing.m,
        },
      }),
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        display: "flex",
        flex: 1,
        width: "auto",
        padding: `${spacing.xs} ${spacing.s} ${spacing.xs} ${spacing.s}`,
        border: `1px solid ${colors.border}`,
        "&:hover": {
          border: `1px solid ${colors.primary}`,
        },
        backgroundColor: colors.white,
        color: colors.textPrimary,
      },
      input: {
        fontSize: textSizes.s,
        "&::placeholder": {
          color: colors.placeholder,
          opacity: 1,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        boxShadow: `0px 5px 15px ${colors.shadow}`,
        border: `1px solid ${colors.stroke}`,
        borderRadius: 6,
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        "&:hover": {
          htmlColor: colors.primary,
        },
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        transform: "translateY(-1px)",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        padding: `${spacing.xs} ${spacing.s} ${spacing.xs} ${spacing.s}`,
        border: "none",
        "&:hover": {
          border: "none",
        },
      },
      notchedOutline: {
        border: "1px solid #e0e0e0",
        "&:hover": {
          border: "1px solid #2B4895",
          borderWidth: "1px !important",
        },
      },
    },
  },
};

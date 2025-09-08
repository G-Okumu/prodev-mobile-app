import { Dimensions, StyleSheet } from "react-native";

const COLORS = {
    white: "#FFFFFF",
}

const SPACING = {
  small: 10,
  medium: 20,
  large: 40,
};

const FONT_SIZE = {
  small: 18,
  medium: 24,
  large: 40,
};

const BORDER_RADIUS = {
  large: 36,
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageContainer: {
    flex: 1,
    height: height,
  },
  logoContainer: {
    padding: SPACING.large,
    alignItems: "center",
    marginTop: 74,
  },
  titleContainer: {
    marginTop: SPACING.large,
  },
  titleText: {
    fontSize: FONT_SIZE.large,
    textAlign: "center",
    fontWeight: 800,
    color: COLORS.white,
  },
  titleSubTextContainer: {
    marginTop: SPACING.medium,
  },
  titleSubText: {
    fontWeight: 300,
    fontSize: FONT_SIZE.small,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonPrimary: {
    backgroundColor: COLORS.white,
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    flex: 1,
  },
  buttonPrimaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
  },
  buttonSecondary: {
    alignItems: "center",
    padding: SPACING.medium,
    borderRadius: BORDER_RADIUS.large,
    borderWidth: 1,
    borderColor: COLORS.white,
    flex: 1,
  },
  buttonSecondaryText: {
    fontSize: FONT_SIZE.small,
    fontWeight: 300,
    textAlign: "center",
    color: COLORS.white,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
  },
  buttonGroupSubText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SPACING.small,
    marginTop: 19,
  },
    searchGroup: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  searchControlGroup: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchFormText: {
    color: "#333",
    fontSize: 14,
  },
  searchControl: {
    height: 30,
    fontSize: 14,
    padding: 0,
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
    filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    width: 60,
  },

  // --- Listings Section ---
  listingContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },

  // --- Pagination / Show More ---
  paginationContainer: {
    padding: 16,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export { styles };

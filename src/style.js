const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#111",
    flexDirection: "row"
  },
  content: {
    flex: 1
  },
  menu: {
    maxWidth: 60,
    margin: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  menuFocused: {},
  menuItem: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    marginVertical: 5
    // backgroundColor: "#f8f258"
  },
  activeWrapper: {
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  },
  activeProgram: {
    width: 160,
    height: 120
  },
  activeProgramTitle: {
    padding: 20,
    color: "white"
  },
  programWrapper: {
    padding: 10,
    alignItems: "center"
  },
  program: {
    height: 130,
    width: 220
  },
  programTitle: {
    color: "white",
    fontFamily: "Montserrat"
  },
  categoryWrapper: {
    padding: 20
  },
  categoryTitle: {
    color: "white"
  },
  categoriesWrapper: {
    flex: 1
  },
  focusedBorder: {
    borderWidth: 4,
    borderColor: "red",
    borderRadius: 5
  }
});

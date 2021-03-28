import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { NewsTypeContext } from "../core/NewsTypeContext";
import { theme } from "../core/theme";

const DropDownSelector = (props) => {
  const { updateNewsType } = React.useContext(NewsTypeContext);

  return (
    <DropDownPicker
      items={[
        {
          label: "World",
          value: "WORLD",
          icon: () => (
            <Icon name="globe" size={18} color={theme.colors.orange} />
          ),
        },
        {
          label: "Nation",
          value: "NATION",
          icon: () => (
            <Icon name="flag" size={18} color={theme.colors.orange} />
          ),
        },
        {
          label: "Business",
          value: "BUSINESS",
          icon: () => (
            <Icon name="dollar-sign" size={18} color={theme.colors.orange} />
          ),
        },
        {
          label: "Technology",
          value: "TECHNOLOGY",
          icon: () => <Icon name="cpu" size={18} color={theme.colors.orange} />,
        },
        {
          label: "Entertainment",
          value: "ENTERTAINMENT",
          icon: () => <Icon name="tv" size={18} color={theme.colors.orange} />,
        },
        {
          label: "Sports",
          value: "SPORTS",
          icon: () => (
            <Icon name="dribbble" size={18} color={theme.colors.orange} />
          ),
        },
        {
          label: "Science",
          value: "SCIENCE",
          icon: () => <Icon name="zap" size={18} color={theme.colors.orange} />,
        },
        {
          label: "Health",
          value: "HEALTH",
          icon: () => (
            <Icon name="activity" size={18} color={theme.colors.orange} />
          ),
        },
      ]}
      defaultValue={"WORLD"}
      containerStyle={{ height: 40, width: 200 }}
      style={{ backgroundColor: theme.colors.grey, alignItems: "center" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      selectedLabelStyle={{ color: theme.colors.orange }}
      dropDownStyle={{ backgroundColor: theme.colors.cream }}
      onChangeItem={(item) => {
        updateNewsType(item.value);
        // console.log("updated item" + item.value);
      }}
    />
  );
};

export default DropDownSelector;

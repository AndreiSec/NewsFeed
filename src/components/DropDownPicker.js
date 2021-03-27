import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/Feather";
import { NewsTypeContext } from "../core/NewsTypeContext";

const DropDownSelector = (props) => {
  const { updateNewsType } = React.useContext(NewsTypeContext);

  return (
    <DropDownPicker
      items={[
        {
          label: "World",
          value: "WORLD",
          icon: () => <Icon name="flag" size={18} color="#900" />,
          hidden: true,
        },
        {
          label: "Nation",
          value: "NATION",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Business",
          value: "BUSINESS",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Technology",
          value: "TECHNOLOGY",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Entertainment",
          value: "ENTERTAINMENT",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Sports",
          value: "SPORTS",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Science",
          value: "SCIENCE",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
        {
          label: "Health",
          value: "HEALTH",
          icon: () => <Icon name="flag" size={18} color="#900" />,
        },
      ]}
      defaultValue={"WORLD"}
      containerStyle={{ height: 40 }}
      style={{ backgroundColor: "#fafafa" }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: "#fafafa" }}
      onChangeItem={(item) => updateNewsType(item.value)}
    />
  );
};

export default DropDownSelector;

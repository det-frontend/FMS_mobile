import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import TableFrame from "../../components/TableFrame";
import tw from "twrnc";
const index = () => {
  const [fetchNew, setFetchNew] = useState(false);
  return (
    <ScrollView horizontal={true}>
      <ScrollView>
        {/* <Text>dd</Text> */}
        <Text style={tw`overflow-scroll`}>
          <TableFrame fetchNew={fetchNew} />
        </Text>
      </ScrollView>
    </ScrollView>
  );
};

export default index;

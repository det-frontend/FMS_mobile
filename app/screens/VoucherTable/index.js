import { View, Text, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import TableFrame from "../../components/TableFrame";
import tw from "twrnc";
import vocContext from "../../auth/vouContext";
const index = () => {
  // const [fetchNew, setFetchNew] = useState(false);
  const { setFetchNew, fetchNew } = useContext(vocContext);

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

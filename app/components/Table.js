import { View, Text, ScrollView } from "react-native";
import defaultStyles from "../config/styles";

function Table({ item, no }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={[defaultStyles.tableCell, { width: 120 }]}>
        <Text style={defaultStyles.tableCellText}>{item.vocono}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 80 }]}>
        <Text style={defaultStyles.tableCellText}>{item.dailyReportDate}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 80 }]}>
        <Text style={defaultStyles.tableCellText}>{item.carNo}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 90 }]}>
        <Text style={defaultStyles.tableCellText}>{item.vehicleType}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 30 }]}>
        <Text style={defaultStyles.tableCellText}>{item.nozzleNo}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 80 }]}>
        <Text style={defaultStyles.tableCellText}>{item.fuelType}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 60 }]}>
        <Text style={defaultStyles.tableCellText}>{item.saleLiter}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 80 }]}>
        <Text style={defaultStyles.tableCellText}>
          {(item.saleLiter / 4.16).toFixed(3)}
        </Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 100 }]}>
        <Text style={defaultStyles.tableCellText}>{item.salePrice}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 100 }]}>
        <Text style={defaultStyles.tableCellText}>{item.totalPrice}</Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 100 }]}>
        <Text style={defaultStyles.tableCellText}>
          {item.totalizer_liter.toFixed(3)}
        </Text>
      </View>
      <View style={[defaultStyles.tableCell, { width: 100 }]}>
        <Text style={defaultStyles.tableCellText}>
          {item.totalizer_amount.toFixed(0)}
        </Text>
      </View>
    </View>
  );
}

export default Table;

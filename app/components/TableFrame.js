import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Table from "./Table";
import color from "../config/color";
import { useContext, useEffect, useState } from "react";
import DailySaleApi from "../api/getDailySale";
import defaultStyles from "../config/styles";
import vocContext from "../auth/vouContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const items = [
  {
    id: 1,
    vocono: "Vocono",
    saleDateTime: "Date Time",
    vehicleNo: "Vehicle No",
    customerName: "Customer Name",
    customerId: "Customer Id",
    purposeOfUse: "Purpose of use",
    fuelType: "Fuel Type",
    saleLiter: "Sale Liter",
    salePrice: "Sale Price",
    totalPrice: "Total Price",
    totalizerLiter: "Total Lizer Liter",
    totalizerAmount: "Totalizer Amount",
    saleGallon: "Sale Gallon",
    cash: "Cash",
    NozzleNumber: "Nozzle Number",
  },
  {
    id: 2,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "1000.935",
    salePrice: "2140",
    totalPrice: "10000000",
    totalizerLiter: "1000000",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 3,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 4,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 5,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 6,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 7,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 8,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 9,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
  {
    id: 10,
    vocono: "2327/C1/010720/50",
    saleDateTime: "1-Jul-2023 14:20:46",
    vehicleNo: "5R/2483",
    customerName: "Zaw Zaw",
    customerId: "808",
    purposeOfUse: "Car",
    fuelType: "002-Octane Ron(95)",
    saleLiter: "0.935",
    salePrice: "2140",
    totalPrice: "73110",
    totalizerLiter: "30845",
    totalizerAmount: "300",
    saleGallon: "200",
    cash: "debt",
    NozzleNumber: "1",
  },
];

function TableFrame({ height = "25%" }) {
  const { fetchNew, setFetchNew } = useContext(vocContext);
  const [dailySale, setDailySale] = useState([]);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await DailySaleApi.dailySales();
  //             setDailySale(response.data.result);
  //         } catch (error) {
  //             console.error("Error fetching data:", error);
  //         }
  //     };

  //     // Initial fetch
  //     fetchData();
  // }, []);

  useEffect(() => {
    const fetchit = async () => {
      setLoading(true);
      const response = await DailySaleApi.dailySales();
      setLoading(false);

      if (response.data.result) {
        setDailySale(response.data.result);
      }
    };

    fetchit();
  }, [fetchNew]);

  return (
    <View
      style={{
        height: height,
        width: "98%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: 8,
        backgroundColor: color.bottomActiveNavigation,
        elevation: 30,
      }}
    >
      <TouchableOpacity onPress={() => setFetchNew((pre) => !pre)}>
        <Text
          style={{
            backgroundColor: color.activeColor,
            borderRadius: 4,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            padding: 5,
            fontSize: 12,
            gap: 2,
            textAlign: "center",
            fontWeight: "300",
            marginBottom: 5,
          }}
        >
          Reload
          <MaterialCommunityIcons size={12} name="reload" />
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row" }}>
        <View style={[defaultStyles.tableCell, { width: 120 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Vocono
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 80 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Sale Date
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 80 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Car No
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 90 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            P of U
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 50 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Noz Num
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 80 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Fuel Type
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 80 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Sale Liter
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 100 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Sale Gallon
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 100 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Sale Price
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 100 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            Total
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 100 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            T Liter
          </Text>
        </View>
        <View style={[defaultStyles.tableCell, { width: 100 }]}>
          <Text
            style={[
              defaultStyles.tableCellText,
              { fontSize: 15, paddingTop: 5 },
            ]}
          >
            T Amount
          </Text>
        </View>
      </View>
      {loading && (
        <View
          style={{
            shadowColor: color.activeColor,
            shadowOffset: {
              width: "100%",
              height: 100,
            },
            shadowOpacity: 100,
            shadowRadius: 100.0,
            opacity: 1.7,
            borderWidth: 0.9999,
            borderColor: color.activeColor,
            backgroundColor: color.bottomActiveNavigation,
            width: "99.7%",
            elevation: 100,
          }}
        ></View>
      )}
      <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
        <FlatList
          maxToRenderPerBatch={5}
          bounces={false}
          data={dailySale}
          keyExtractor={(dailySale) => dailySale._id.toString()}
          renderItem={({ item, index }) => (
            <Table no={parseInt(index + 1)} item={item} />
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

export default TableFrame;

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import { useContext } from "react";
import { DataContext } from "../Root/Root";
import { ComposedChart, Bar, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import useLocalStorage from "../utilities/useLocalStorage";

export default function Statistics() {
  const bannerStyle = `py-8 md:py-12 lg:py-16`;
  const data = useContext(DataContext) || [];
  const { storedList } = useLocalStorage("statistics") || [];
  const allData = data?.filter((item) => item?.title) || [];
  const flattenedStoredList = storedList.flat();

  const productCount = flattenedStoredList.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const cartItems = allData
    .map((product) => {
      const count = productCount[product.id] || 0;
      return count > 0 ? { ...product, count } : null;
    })
    .filter((item) => item !== null);
  const groupedData = cartItems.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.name === item.title);
    if (existing) {
      existing.count += item.count;
      existing.totalPrice += item.price * item.count;
      existing.totalRating += (item.rating || 0) * item.count;
    } else {
      acc.push({
        name: item.title,
        totalPrice: item.price * item.count,
        count: item.count,
        totalRating: (item.rating || 0) * item.count,
      });
    }
    return acc;
  }, []);

  const totalPrice = groupedData.reduce((sum, item) => sum + item.totalPrice, 0);
  const totalGadgets = groupedData.reduce((sum, item) => sum + item.count, 0);
  const totalRating = groupedData.reduce((sum, item) => sum + item.totalRating, 0);
  const totalRatingsCount = groupedData.reduce((sum, item) => sum + item.count, 0);
  const averageRating = totalRatingsCount > 0 ? (totalRating / totalRatingsCount).toFixed(1) : "N/A";

  return (
    <div>
      <Helmet>
        <title>Statistics | Gadget Heaven</title>
        <meta
          name="description"
          content="Explore your statistics to see all your recent transactions and orders."
        />
      </Helmet>
      <Banner
        bannerTitle="Statistics"
        bannerDescription="Explore your statistics to see all your recent transactions and orders."
        bannerStyle={bannerStyle}
      />
      <div className="px-4 md:px-0 py-6 pt-4 pb-8 md:pb-12 space-y-6 md:w-9/12 lg:w-10/12 mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-5 md:my-8">Statistics</h1>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={groupedData}>
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip
                content={({ payload }) => {
                  const data = payload && payload[0]?.payload;
                  if (!data) return null;
                  return (
                    <div className="custom-tooltip">
                      <p>{`${data.name}: $${data.totalPrice}`}</p>
                      <p>{`${data.count} item(s)`}</p>
                    </div>
                  );
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="totalPrice"
                stroke="#9c27b0"
                fill="rgba(156, 39, 250, 0.3)"
                name="Total Price"
                strokeWidth={1}
              />
              <Bar dataKey="totalPrice" fill="#9538E2" name="Total Price" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="flex md:justify-center items-center mt-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="md:w-6 md:h-6 w-5 h-5 bg-purple-600 rounded-md md:rounded-lg"></span>
            <p className="md:font-semibold text-purple-700">Total Gadgets: {totalGadgets}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="md:w-6 md:h-6 w-5 h-5 bg-purple-500 rounded-md md:rounded-lg"></span>
            <p className="md:font-semibold text-purple-500">Total Price: ${totalPrice}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="md:w-6 md:h-6 w-5 h-5 bg-red-500 rounded-md md:rounded-lg"></span>
            <p className="md:font-semibold text-red-500">Average Rating: {averageRating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

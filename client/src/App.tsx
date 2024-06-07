import { Routes, Route, Outlet, Link } from "react-router-dom";

import "./App.css";
import { BankWay } from "./pages/bankWay";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Layout } from "./shared/ui/layout";
import { Banks, OperationWays, Pages } from "./shared/constants";
import { NotFound } from "./pages/notFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path={`/${Pages.SberBuy}`}
          index
          element={
            <BankWay bank={Banks.Sber} operationWay={OperationWays.Buy} />
          }
        />
        <Route
          path={`/${Pages.SberSell}`}
          element={
            <BankWay bank={Banks.Sber} operationWay={OperationWays.Sell} />
          }
        />
        <Route
          path={`/${Pages.TinkBuy}`}
          element={
            <BankWay bank={Banks.Tink} operationWay={OperationWays.Buy} />
          }
        />
        <Route
          path={`/${Pages.TinkSell}`}
          element={
            <BankWay bank={Banks.Tink} operationWay={OperationWays.Sell} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

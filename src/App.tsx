import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ERPLayout } from "@/components/layout/ERPLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import SalesOrders from "@/pages/sales/SalesOrders";
import NewSalesOrder from "@/pages/sales/NewSalesOrder";
import Customers from "@/pages/sales/Customers";
import Quotes from "@/pages/sales/Quotes";
import Subscriptions from "@/pages/sales/Subscriptions";
import ProductsCatalog from "@/pages/products/ProductsCatalog";
import Categories from "@/pages/products/Categories";
import Bundles from "@/pages/products/Bundles";
import Pricing from "@/pages/products/Pricing";
import InventoryOverview from "@/pages/inventory/InventoryOverview";
import InventoryItems from "@/pages/inventory/InventoryItems";
import Batches from "@/pages/inventory/Batches";
import Warehouses from "@/pages/inventory/Warehouses";
import Transfers from "@/pages/inventory/Transfers";
import Counts from "@/pages/inventory/Counts";
import Waste from "@/pages/inventory/Waste";
import Replenishment from "@/pages/inventory/Replenishment";
import Vendors from "@/pages/purchase/Vendors";
import RFQs from "@/pages/purchase/RFQs";
import PurchaseOrders from "@/pages/purchase/PurchaseOrders";
import Receipts from "@/pages/purchase/Receipts";
import Bills from "@/pages/purchase/Bills";
import WorkOrders from "@/pages/mrp/WorkOrders";
import BOMs from "@/pages/mrp/BOMs";
import Planning from "@/pages/mrp/Planning";
import Quality from "@/pages/mrp/Quality";
import LogisticsSchedule from "@/pages/logistics/Schedule";
import LogisticsRoutes from "@/pages/logistics/Routes";
import Drivers from "@/pages/logistics/Drivers";
import DeliveryDetail from "@/pages/logistics/DeliveryDetail";
import FinanceOverview from "@/pages/finance/FinanceOverview";
import AccountsReceivable from "@/pages/finance/AccountsReceivable";
import AccountsPayable from "@/pages/finance/AccountsPayable";
import Invoices from "@/pages/finance/Invoices";
import Payments from "@/pages/finance/Payments";
import Banks from "@/pages/finance/Banks";
import Reconciliation from "@/pages/finance/Reconciliation";
import ChartOfAccounts from "@/pages/accounting/ChartOfAccounts";
import JournalEntries from "@/pages/accounting/JournalEntries";
import GeneralLedger from "@/pages/accounting/GeneralLedger";
import Taxes from "@/pages/accounting/Taxes";
import Employees from "@/pages/hr/Employees";
import RolesPermissions from "@/pages/hr/RolesPermissions";
import Timesheets from "@/pages/hr/Timesheets";
import Payroll from "@/pages/hr/Payroll";
import SalesReport from "@/pages/reports/SalesReport";
import InventoryReport from "@/pages/reports/InventoryReport";
import MarginsReport from "@/pages/reports/MarginsReport";
import DeliveriesReport from "@/pages/reports/DeliveriesReport";
import FinanceReport from "@/pages/reports/FinanceReport";
import CompanySettings from "@/pages/settings/Company";
import Units from "@/pages/settings/Units";
import Users from "@/pages/settings/Users";
import ApprovalFlows from "@/pages/settings/ApprovalFlows";
import DeliveryWindows from "@/pages/settings/DeliveryWindows";
import Integrations from "@/pages/settings/Integrations";
import Branding from "@/pages/settings/Branding";
import AuditLogs from "@/pages/audit/AuditLogs";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* ERP Routes */}
          <Route element={<ERPLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Sales */}
            <Route path="/sales/orders" element={<SalesOrders />} />
            <Route path="/sales/orders/new" element={<NewSalesOrder />} />
            <Route path="/sales/customers" element={<Customers />} />
            <Route path="/sales/quotes" element={<Quotes />} />
            <Route path="/sales/subscriptions" element={<Subscriptions />} />
            
            {/* Products */}
            <Route path="/products/catalog" element={<ProductsCatalog />} />
            <Route path="/products/categories" element={<Categories />} />
            <Route path="/products/bundles" element={<Bundles />} />
            <Route path="/products/pricing" element={<Pricing />} />
            
            {/* Inventory */}
            <Route path="/inventory/overview" element={<InventoryOverview />} />
            <Route path="/inventory/items" element={<InventoryItems />} />
            <Route path="/inventory/batches" element={<Batches />} />
            <Route path="/inventory/warehouses" element={<Warehouses />} />
            <Route path="/inventory/transfers" element={<Transfers />} />
            <Route path="/inventory/counts" element={<Counts />} />
            <Route path="/inventory/waste" element={<Waste />} />
            <Route path="/inventory/replenishment" element={<Replenishment />} />
            
            {/* Purchases */}
            <Route path="/purchase/vendors" element={<Vendors />} />
            <Route path="/purchase/rfqs" element={<RFQs />} />
            <Route path="/purchase/orders" element={<PurchaseOrders />} />
            <Route path="/purchase/receipts" element={<Receipts />} />
            <Route path="/purchase/bills" element={<Bills />} />
            
            {/* Production */}
            <Route path="/mrp/work-orders" element={<WorkOrders />} />
            <Route path="/mrp/boms" element={<BOMs />} />
            <Route path="/mrp/planning" element={<Planning />} />
            <Route path="/mrp/quality" element={<Quality />} />
            
            {/* Logistics */}
            <Route path="/logistics/schedule" element={<LogisticsSchedule />} />
            <Route path="/logistics/routes" element={<LogisticsRoutes />} />
            <Route path="/logistics/drivers" element={<Drivers />} />
            <Route path="/logistics/deliveries/:id" element={<DeliveryDetail />} />
            
            {/* Finance */}
            <Route path="/finance/overview" element={<FinanceOverview />} />
            <Route path="/finance/ar" element={<AccountsReceivable />} />
            <Route path="/finance/ap" element={<AccountsPayable />} />
            <Route path="/finance/invoices" element={<Invoices />} />
            <Route path="/finance/payments" element={<Payments />} />
            <Route path="/finance/banks" element={<Banks />} />
            <Route path="/finance/reconciliation" element={<Reconciliation />} />
            <Route path="/finance/cashflow" element={<FinanceOverview />} />
            
            {/* Accounting */}
            <Route path="/accounting/chart-of-accounts" element={<ChartOfAccounts />} />
            <Route path="/accounting/journal-entries" element={<JournalEntries />} />
            <Route path="/accounting/general-ledger" element={<GeneralLedger />} />
            <Route path="/accounting/taxes" element={<Taxes />} />
            
            {/* HR */}
            <Route path="/hr/employees" element={<Employees />} />
            <Route path="/hr/roles-permissions" element={<RolesPermissions />} />
            <Route path="/hr/timesheets" element={<Timesheets />} />
            <Route path="/hr/payroll" element={<Payroll />} />
            
            {/* Reports */}
            <Route path="/reports/sales" element={<SalesReport />} />
            <Route path="/reports/inventory" element={<InventoryReport />} />
            <Route path="/reports/margins" element={<MarginsReport />} />
            <Route path="/reports/deliveries" element={<DeliveriesReport />} />
            <Route path="/reports/finance" element={<FinanceReport />} />
            <Route path="/reports" element={<SalesReport />} />
            
            {/* Audit */}
            <Route path="/audit/logs" element={<AuditLogs />} />
            
            {/* Settings */}
            <Route path="/settings/company" element={<CompanySettings />} />
            <Route path="/settings/units" element={<Units />} />
            <Route path="/settings/users" element={<Users />} />
            <Route path="/settings/approval-flows" element={<ApprovalFlows />} />
            <Route path="/settings/delivery-windows" element={<DeliveryWindows />} />
            <Route path="/settings/integrations" element={<Integrations />} />
            <Route path="/settings/branding" element={<Branding />} />
            <Route path="/settings" element={<CompanySettings />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

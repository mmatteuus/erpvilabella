import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ERPLayout } from "@/components/layout/ERPLayout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import SalesOrders from "@/pages/sales/SalesOrders";
import NewSalesOrder from "@/pages/sales/NewSalesOrder";
import ProductsCatalog from "@/pages/products/ProductsCatalog";
import InventoryOverview from "@/pages/inventory/InventoryOverview";
import FinanceOverview from "@/pages/finance/FinanceOverview";
import AuditLogs from "@/pages/audit/AuditLogs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* ERP Routes */}
          <Route element={<ERPLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Sales */}
            <Route path="/sales/orders" element={<SalesOrders />} />
            <Route path="/sales/orders/new" element={<NewSalesOrder />} />
            <Route path="/sales/customers" element={<SalesOrders />} />
            <Route path="/sales/quotes" element={<SalesOrders />} />
            
            {/* Products */}
            <Route path="/products/catalog" element={<ProductsCatalog />} />
            <Route path="/products/categories" element={<ProductsCatalog />} />
            <Route path="/products/bundles" element={<ProductsCatalog />} />
            
            {/* Inventory */}
            <Route path="/inventory/overview" element={<InventoryOverview />} />
            <Route path="/inventory/items" element={<InventoryOverview />} />
            <Route path="/inventory/batches" element={<InventoryOverview />} />
            <Route path="/inventory/waste" element={<InventoryOverview />} />
            
            {/* Purchases */}
            <Route path="/purchase/vendors" element={<InventoryOverview />} />
            <Route path="/purchase/orders" element={<InventoryOverview />} />
            
            {/* Production */}
            <Route path="/mrp/work-orders" element={<Dashboard />} />
            <Route path="/mrp/boms" element={<Dashboard />} />
            
            {/* Logistics */}
            <Route path="/logistics/schedule" element={<Dashboard />} />
            <Route path="/logistics/drivers" element={<Dashboard />} />
            
            {/* Finance */}
            <Route path="/finance/overview" element={<FinanceOverview />} />
            <Route path="/finance/ar" element={<FinanceOverview />} />
            <Route path="/finance/ap" element={<FinanceOverview />} />
            <Route path="/finance/cashflow" element={<FinanceOverview />} />
            
            {/* Accounting */}
            <Route path="/accounting/chart-of-accounts" element={<FinanceOverview />} />
            <Route path="/accounting/journal-entries" element={<FinanceOverview />} />
            
            {/* HR */}
            <Route path="/hr/employees" element={<Dashboard />} />
            
            {/* Reports */}
            <Route path="/reports" element={<Dashboard />} />
            
            {/* Audit */}
            <Route path="/audit/logs" element={<AuditLogs />} />
            
            {/* Settings */}
            <Route path="/settings" element={<Dashboard />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Warehouse,
  Truck,
  Factory,
  DollarSign,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  FileText,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface NavItem {
  title: string;
  href?: string;
  icon: React.ElementType;
  children?: { title: string; href: string }[];
}

const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  {
    title: 'Vendas',
    icon: ShoppingCart,
    children: [
      { title: 'Pedidos', href: '/sales/orders' },
      { title: 'Clientes', href: '/sales/customers' },
      { title: 'Orçamentos', href: '/sales/quotes' },
    ],
  },
  {
    title: 'Produtos',
    icon: Package,
    children: [
      { title: 'Catálogo', href: '/products/catalog' },
      { title: 'Categorias', href: '/products/categories' },
      { title: 'Kits', href: '/products/bundles' },
    ],
  },
  {
    title: 'Estoque',
    icon: Warehouse,
    children: [
      { title: 'Visão Geral', href: '/inventory/overview' },
      { title: 'Itens', href: '/inventory/items' },
      { title: 'Lotes', href: '/inventory/batches' },
      { title: 'Perdas', href: '/inventory/waste' },
    ],
  },
  {
    title: 'Compras',
    icon: Truck,
    children: [
      { title: 'Fornecedores', href: '/purchase/vendors' },
      { title: 'Pedidos', href: '/purchase/orders' },
    ],
  },
  {
    title: 'Produção',
    icon: Factory,
    children: [
      { title: 'Ordens', href: '/mrp/work-orders' },
      { title: 'Fichas Técnicas', href: '/mrp/boms' },
    ],
  },
  {
    title: 'Financeiro',
    icon: DollarSign,
    children: [
      { title: 'Visão Geral', href: '/finance/overview' },
      { title: 'A Receber', href: '/finance/ar' },
      { title: 'A Pagar', href: '/finance/ap' },
    ],
  },
  {
    title: 'Contábil',
    icon: BookOpen,
    children: [
      { title: 'Plano de Contas', href: '/accounting/chart-of-accounts' },
      { title: 'Lançamentos', href: '/accounting/journal-entries' },
    ],
  },
  { title: 'RH', href: '/hr/employees', icon: Users },
  { title: 'Relatórios', href: '/reports', icon: BarChart3 },
  { title: 'Auditoria', href: '/audit/logs', icon: FileText },
  { title: 'Configurações', href: '/settings', icon: Settings },
];

export function ERPMobileNav() {
  const location = useLocation();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <nav className="py-4 px-3">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              {item.children ? (
                <Collapsible
                  open={openItems.includes(item.title)}
                  onOpenChange={() => toggleItem(item.title)}
                >
                  <CollapsibleTrigger className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted/50">
                    <item.icon className="w-5 h-5" />
                    <span className="flex-1 text-left">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform',
                        openItems.includes(item.title) && 'rotate-180'
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-8 pt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className={cn(
                          'block px-3 py-2.5 rounded-md text-sm transition-colors',
                          isActive(child.href)
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        )}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  to={item.href!}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                    isActive(item.href!)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted/50'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  );
}

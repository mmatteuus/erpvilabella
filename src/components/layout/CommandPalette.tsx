import { useNavigate } from 'react-router-dom';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Warehouse,
  Users,
  Plus,
  Search,
  FileText,
  DollarSign,
} from 'lucide-react';
import { useEffect } from 'react';

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [open, onOpenChange]);

  const runCommand = (command: () => void) => {
    onOpenChange(false);
    command();
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Digite um comando ou busque..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        
        <CommandGroup heading="Ações Rápidas">
          <CommandItem onSelect={() => runCommand(() => navigate('/sales/orders/new'))}>
            <Plus className="mr-2 h-4 w-4" />
            <span>Novo Pedido</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/sales/customers'))}>
            <Users className="mr-2 h-4 w-4" />
            <span>Buscar Cliente</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/inventory/items'))}>
            <Search className="mr-2 h-4 w-4" />
            <span>Consultar Estoque</span>
          </CommandItem>
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Navegação">
          <CommandItem onSelect={() => runCommand(() => navigate('/dashboard'))}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/sales/orders'))}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            <span>Pedidos de Venda</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/products/catalog'))}>
            <Package className="mr-2 h-4 w-4" />
            <span>Catálogo de Produtos</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/inventory/overview'))}>
            <Warehouse className="mr-2 h-4 w-4" />
            <span>Estoque</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/finance/overview'))}>
            <DollarSign className="mr-2 h-4 w-4" />
            <span>Financeiro</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => navigate('/reports'))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Relatórios</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

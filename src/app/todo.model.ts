export interface Todo {
    id?: number;
    title: string;
    description: string;
    status: 'pendente' | 'em progresso' | 'concluída';
    type: string;
    showEdit?: boolean;
  }
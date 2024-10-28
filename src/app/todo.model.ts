export interface Todo {
    id?: number;
    title: string;
    description: string;
    status: 'Pendente' | 'Em progresso' | 'Concluída';
    type: string;
    showEdit?: boolean;
  }
import { TodoProvider } from './Todo';

const AppProvider: React.FC = ({ children }) => {
  return (
    <TodoProvider>{children}</TodoProvider>
  );
};

export default AppProvider;
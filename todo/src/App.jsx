import { TodoItem } from './components/todoitems/TodoItem';
import { TODOITEM_DATA } from './api/mock_data';

function App() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Todo App</h1>

      <ul className="space-y-2">
        {TODOITEM_DATA.map((item) =>
          <TodoItem
            key={item.id}
            done={item.done}
            text={item.text}
            description={item.description}
          />,
        )}
      </ul>
    </div>
  );
}
export default App;

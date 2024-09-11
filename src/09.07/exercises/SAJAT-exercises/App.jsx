import PostList from "./PostList";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const { postId } = useParams();

  return (
    <>
      {!postId ? (
        <>
          <div>09.07 - App</div> <PostList />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
export default App;

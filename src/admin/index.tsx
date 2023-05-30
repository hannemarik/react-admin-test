import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Layout from "../Layout";
import { Dashboard } from "../Dashboard";
import { UserList } from "../users";
import { PostCreate, PostEdit, PostList } from "../posts";
import { CommentList } from "../comments";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin 
    dataProvider={dataProvider} 
    layout={Layout}
    dashboard={Dashboard}
  >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    <Resource name="comments" list={CommentList} />
    <Resource name="users" list={UserList} recordRepresentation="name"/>
  </Admin>
);

export default App;
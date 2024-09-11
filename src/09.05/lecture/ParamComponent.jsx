import { useParams } from 'react-router-dom';

export default function ParamComponent() {
  const { userId } = useParams();
  console.log(userId);
  return <div>Paramcomponent</div>;
}

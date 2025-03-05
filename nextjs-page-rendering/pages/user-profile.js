export default function UserProfilePage(props) {
  const { username } = props;
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      username: "Max",
    },
  };
}

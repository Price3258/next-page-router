export default function UserProfilePage(props) {
  const { username } = props;
  return (
    <div>
      <h1>{username}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  return {
    props: {
      username: "Max",
    },
  };
}

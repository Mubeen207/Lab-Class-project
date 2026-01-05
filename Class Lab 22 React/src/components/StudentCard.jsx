function StudentCard({ name, rollNo, batch, favorateLanguage }) {
  return (
    <div className="border m-5 p-5">
      <h2>Name : {name}</h2>
      <h2>Roll No : {rollNo}</h2>
      <h2>Batch : {batch}</h2>
      <h2>Language : {favorateLanguage}</h2>
    </div>
  );
}

export default StudentCard;

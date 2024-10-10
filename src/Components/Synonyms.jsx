const Synonyms = ({ syno }) => {
  return (
    <div>
      {syno.map((val) =>
        val.meanings.map((synos) =>
          synos.synonyms.map((syn, index) => (
            <div key={index}>
              <li>{syn}</li> {/* Display the synonym itself */}
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Synonyms;

const MeaningList = ({ mean }) => {
  console.log(mean);

  return (
    <div>
      {mean.map((val) => //This loops through the mean array (which comes from the API response).
        val.meanings.map((means) => //For each item in mean, we loop through its meanings array (each word can have multiple meanings or parts of speech).
          means.definitions.map((def) => ( //For each meaning, we loop through its definitions array (each meaning can have multiple definitions).
            <div key={def.definition}>  {/*Inside the loop, we render each definition inside a div, with the definition text displayed in a list item <li>. */}
              <li>{def.definition}</li>
              <hr />
              <hr />
            </div>
          ))
        )
      )}
    </div>
  );
};

export default MeaningList;

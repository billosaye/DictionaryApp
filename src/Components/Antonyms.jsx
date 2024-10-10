const Antonyms = ({anto}) => {
    return (
      <div>
        {anto.map((val) =>
          val.meanings.map((antos) =>
              antos.antonyms.map((ant, index) => (
              <div key={index}>
                <li>{ant}</li> {/* Display the antonym itself */}
                <hr />
              </div>
            ))
          )
        )}
      </div>
  
      
    )
  }
  
  export default Antonyms
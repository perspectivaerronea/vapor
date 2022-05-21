const Finalizar = ({ juego }) => {

  function generarCodigo() {

    const mascara = "####-####-####-####";
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const cantidadCaracteres = caracteres.length;

    const aplicarMascara = (str, pattern) => {
      let i = 0;
      const padded = pattern.replace(/#/g, () => {
        return str[i++];
      });
      return padded;
    };

    var resultado = '';

    for (var i = 0; i < 16; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * cantidadCaracteres));

    }
    return aplicarMascara(resultado, mascara);
  }

  const listaCodigos = () => {
    return <ul>{Array.from(Array(juego.qty), (e, i) => {
      return <li key={i}><a href={juego.item.link} target="_blank" rel="noreferrer"> {generarCodigo()} </a></li>
    })}</ul>

  }

  return (
    <div className="bg-white w-1/3 shadow-md rounded m-3 mx-auto">
      <div className="text-3xl bold ">{juego.item.name}</div>
      <div className="text-green-800">{listaCodigos()}</div>
    </div>
  )
}
export default Finalizar;
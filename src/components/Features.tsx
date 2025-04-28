import React from 'react'

function Features() {
  return (
    <div>
      <div className=" py-8 container mx-auto flex flex-col justify-between items-center">
       

        <div className="flex flex-col md:flex-row justify-center lg:justify-around gap-28 mt-34 mb-34">
          {/* Feature 1 */}
          <div className="text-center">
            <div className="border-2 border-black-500 border-solid rounded-full p-4 inline-block w-30">
            <img src="assets/logo-flat.svg" alt="Logo Flat" />
            </div>
            <h4 className="text-xl font-bold mt-4 text-black ">
              Missão
            </h4>
            <p className="text-black max-w-60 mx-auto">
              Proporcionar uma experiência única de conforto, elegância por meio de produtos de alta qualidade.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center">
          <div className="border-2 border-black-500 border-solid rounded-full p-4 inline-block w-30">
            <img src="assets/logo-flat.svg" alt="Logo Flat" />
            </div>
            <h4 className="text-xl font-bold mt-4 text-black ">
              Visão
            </h4>
            <p className="text-black  max-w-60 mx-auto">
              Ser uma marca de referência e reconhecimento no mercado, admirada por sua excelência, inovação e design sofisticado.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center">
          <div className="border-2 border-black-500 border-solid rounded-full p-4 inline-block w-30">
            <img src="assets/logo-flat.svg" alt="Logo Flat" />
            </div>
            <h4 className="text-xl font-bold mt-4 text-black">
              Valores
            </h4>
            <p className="text-black  max-w-60 mx-auto">
              Qualidade e Excelência
              Simplicidade e Elegância
              Confiança e Ética <br />
              Trabalho em Equipe <br />
              Inovação Constante
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
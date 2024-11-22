import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Div para a área de login ocupando 40% da tela */}
      <div className="w-2/5 bg-[#312E38] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {/* Seção de logos com espaçamento fixo */}
          <div className="flex flex-col items-center space-y-4">
            <div>
              <Image
                src="/Awesome.png"
                alt="Awesome logo"
                height={100}
                width={100}
                className="mx-auto"
              />
            </div>

            <div className="h-[1px] bg-[#FF9000] w-full mb-4"></div>

            <Image
              src="/GoBarber.png"
              alt="Logo GoBarber"
              height={200}
              width={197.8}
              className="mx-auto"
            />

            <div className="h-[1px] bg-[#FF9000] w-full mb-4"></div>

            <div>
              <Image
                src="/Haircuts & Shaves.png"
                alt="Haircuts & Shaves logo"
                height={100}
                width={120}
                className="mx-auto"
              />
            </div>
          </div>

          <h1 className="text-2xl font-bold mt-20 text-[#F4EDE8]">
            Faça seu Login
          </h1>

          <input
            placeholder="E-mail"
            className="bg-[#232129] mt-4 p-3 border-none rounded-md w-80 text-lg placeholder-[#666360]"
            type="text"
          />
          <input
            placeholder="Senha"
            className="bg-[#232129] mt-4 p-3 border-none rounded-md w-80 text-lg placeholder-[#666360]" // Usando uma cor personalizada
            type="password"
          />

          {/* Botão estilizado com largura igual aos inputs */}
          <button className="mt-6 bg-[#FF9000] text-white py-3 px-6 rounded-md w-80 text-lg hover:bg-[#e68a00] transition-all duration-300">
            Entrar
          </button>

          {/* Link de "Esqueci minha senha" */}
          <a
            href="/signup"
            className="text-[#F4EDE8] mt-6 hover:text-black transition-all duration-100"
          >
            Esqueci minha senha
          </a>
        </div>
      </div>

      {/* Div para a imagem de fundo ocupando 60% da tela */}
      <div className="w-3/5 relative">
        <Image
          src="/LogonImage.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

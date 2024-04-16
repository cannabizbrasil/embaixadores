
import HubspotEmbaixadorForm from './hubspotform'

export default function FormularioEmbaixador() {
    return (

        <div className="relative isolate bg-white " id="cadastro">

            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidiven bg-roxo lg:w-1/2">
                        </div>
                        <h2 className="text-5xl font-bold tracking-tight text-laranja">Junte-se ao time de empreendedores que está revolucionando o mercado de Cannabis no Brasil.
                        </h2>
                        <p className="text-xl mt-6 tracking-tight text-laranja">Preenchar o formulário e inicie sua jornada no mercado da Cannabis.</p>

                    </div>
                </div>
                <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <HubspotEmbaixadorForm />
                    </div>
                </div>
            </div>
        </div >
    )
}
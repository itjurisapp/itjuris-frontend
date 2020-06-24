import React,{useState} from 'react'
import NavBar from '../../components/navbar/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import api from '../../services/api'

export default function Register_BasicDatas () {
    const [proceduralClass, setProceduralClass] = useState('')
    const [codeLocation, setCodeLocation] = useState('')
    const [competence, setCompetence] = useState('')
    const [linkedProcess, setLinkedprocess] = useState('')
    const [bindingProcessModality, SetBindingProcessModality] =useState('')
    const [priority, sePriority] = useState('')
    const [lawsuitValue, setLawsuitValue] = useState('')
    const [legalAssistance, setLegalAssistance] = useState('')
    const [secrecyLevel, setSecrecyLevel] = useState('')
    const [dataAjuizamento, setDataAjuizamento] = useState('')
    const [otherParameter, setOtherParameter] = useState('')

    async function handleRegister_BasicDatas (e){
      e.preventDefault();

      const data = {
        proceduralClass,
        codeLocation,
        competence,
        linkedProcess,
        bindingProcessModality,
        priority,
        lawsuitValue,
        legalAssistance,
        secrecyLevel,
        dataAjuizamento,
        otherParameter

      };
      console.log(data)
      try {
        await api.post('/register-basic-datas', data)
        alert('Cadastro realizado com sucesso...')
      } catch (error) {
        alert('erro no cadastro, tente novamente...')
      }

    }
    return (
        <>
            < NavBar />

            <section id="hero">
                <div className="container"> 
                  <h1>Cadastrar Processos</h1>

                <form onSubmit={handleRegister_BasicDatas}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Número Indentificador da classe processual</label>
                        <input 
                         type="text" 
                         className="form-control" 
                         placeholder="Digite um número"
                         name={ proceduralClass }
                         onChange={ e => setProceduralClass( e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Código de localização</label>
                        <input 
                         type="text" 
                         className="form-control" 
                         placeholder="digite o código de localização"
                         name={ codeLocation }
                         onChange={ e => setCodeLocation(e.target.value)}
                        />
                      </div>

                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Competência</label>
                      <input 
                        type="text" 
                        className="form-control"
                        placeholder="Digite o identificador da competência"
                        name={ competence }
                        onChange={ e => setCompetence(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Processo vinculado</label>
                      <input 
                       type="text"
                       className="form-control"
                       placeholder="Digite o processo vinculado"
                       name={ linkedProcess }
                       onChange={ e => setLinkedprocess(e.target.value)}
                      />
                    </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Modalidade vinculação processo</label>
                        <input 
                         type="text"
                         className="form-control" 
                         placeholder="Digite o identificador de processos"
                         name={ bindingProcessModality}
                         onChange={ e => SetBindingProcessModality(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Prioridade</label>
                        <input type="text"
                         className="form-control"
                         placeholder="Digite a prioridade"
                         name={ priority } 
                         onChange={ e => sePriority(e.target.value)}
                        />
                      </div>
                    
                  </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Valor causa</label>
                        <input 
                         type="text"
                         className="form-control" 
                         placeholder="Digite o valor da relação jurídica"
                         name={ lawsuitValue } 
                         onChange={ e => setLawsuitValue(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Assistência judiciária</label>
                        <input type="text"
                         className="form-control"
                         placeholder="ex: sim ou não"
                         name={ legalAssistance }
                         onChange={ e => setLegalAssistance(e.target.value)}
                        />
                      </div>
                      </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Nível de sigilo</label>
                      <input 
                       type="text"
                       className="form-control" 
                       placeholder="Digite o valor da relação jurídica"
                       name={ secrecyLevel }
                       onChange={ e => setSecrecyLevel(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Data de Ajuizamento</label>
                      <input type="text"
                       className="form-control"
                       placeholder="Digite a data de autuação do processo "
                       name={dataAjuizamento}
                       onChange={ e => setDataAjuizamento(e.target.value)}
                      />
                    </div>
                    </div>
                    <div className="form-group">
                      <label>Outros parâmetros</label>
                      <input 
                       type="text"
                       className="form-control" 
                       placeholder="Digite a situação do processo"
                       name={otherParameter}
                       onChange={ e => setOtherParameter(e.target.value)}
                      />
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">Salvar Processos</button>
                  </form>
                  
                </div>
            </section>
        </>

    )
}
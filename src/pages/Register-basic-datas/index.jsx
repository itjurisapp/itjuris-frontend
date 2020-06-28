import React,{useState} from 'react'
import NavBar from '../../components/navbar/index'
import 'bootstrap/dist/css/bootstrap.min.css'

/*import { pt } from 'date-fns/locale'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'*/

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
      e.target.reset();
      
        const response = {
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
        }
        
        try{
        await api.post('basic-datas', {
          
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(response)
        })
        console.log({response})
        alert('cadastro realizado com sucesso')
      }catch(error) {
        alert('erro no cadastro, tente novamente')
      }
      setProceduralClass('')
    }
    
    return (
        <>
            < NavBar />

            <section>
                <div className="container"> 
                  <h2>Cadastrar Processos</h2>

                <form onSubmit={handleRegister_BasicDatas}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Número Indentificador da classe processual</label>
                        <input 
                          
                         className="form-control" 
                         placeholder="Digite um número"
                         name={ proceduralClass }

                         onChange={ e => setProceduralClass(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Código de localização</label>
                        <input 
                         
                         className="form-control" 
                         placeholder="digite o código de localização"
                         name={ codeLocation }
                         
                         onChange={ e => setCodeLocation(parseInt(e.target.value))}
                        />
                      </div>

                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Competência</label>
                      <input 
                        
                        className="form-control"
                        placeholder="Digite o identificador da competência"
                        name={ competence }
                        
                        onChange={ e => setCompetence(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label>Processo vinculado</label>
                      <input 
                       
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
                         
                         className="form-control" 
                         placeholder="Digite o identificador de processos"
                         name={ bindingProcessModality}
                        
                         onChange={ e => SetBindingProcessModality(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Prioridade</label>
                        <input 

                         className="form-control"
                         placeholder="Digite a prioridade"
                         name={ priority } 
                         
                         onChange={ e => sePriority(parseInt(e.target.value))}
                        />
                      </div>
                    
                  </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Valor causa</label>
                        <input 
                         
                         className="form-control" 
                         placeholder="Digite o valor da relação jurídica"
                         name={ lawsuitValue } 
                         
                         onChange={ e => setLawsuitValue(parseInt(e.target.value))}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Assistência judiciária</label><br/>
                        <div class="custom-control custom-radio custom-control-inline">
                          <input 
                          type="radio" 
                          class="custom-control-input" 
                          id="sim" 
                          name="legalAssistance"
                          value={true}
                          checked={legalAssistance === 'sim'}
                          onChange={ e => setLegalAssistance(Boolean(e.target.value) )}
                          />
                          <label class="custom-control-label" htmlFor="sim">sim</label>
                        </div>

                        <div class="custom-control custom-radio custom-control-inline">
                          <input 
                          type="radio" 
                          class="custom-control-input" 
                          id="nao" 
                          name="legalAssistance"
                          value={false}
                          checked={legalAssistance === 'nao'}
                          onChange={ e => setLegalAssistance(Boolean(e.target.value ))}
                          />
                          <label class="custom-control-label" htmlFor="nao">não</label>
                       </div>
                      </div>
                      </div>
                    <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Nível de sigilo</label>
                      <input 
                       
                       className="form-control" 
                       placeholder="Digite o valor da relação jurídica"
                       name={ secrecyLevel }
                       
                       onChange={ e => setSecrecyLevel(parseInt(e.target.value))}
                      />
                    </div>
                    <div className="form-group col-md-5">
                      <label>Data de Ajuizamento</label><br/>
                      <input 
                       
                       className="form-control" 
                       placeholder="Digite o valor da relação jurídica"
                       name={ dataAjuizamento }
                      
                       onChange={ e => setDataAjuizamento(e.target.value)}
                      />
                    </div>
                    </div>
                    <div className="form-group">
                      <label>Outros parâmetros</label>
                      <input 
                       
                       className="form-control" 
                       placeholder="Digite a situação do processo"
                       name={otherParameter}
                       
                       onChange={ e => setOtherParameter(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Salvar Processos</button>
                  </form>
                </div>
            </section>
        </>
    )
}
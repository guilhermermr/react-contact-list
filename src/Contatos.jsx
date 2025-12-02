import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


const Contatos = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contacts, setContacts] = useState([]);

    const handleAddContact = () => {

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone,
        };

        setContacts([...contacts, newContact]);

        setName('');
        setEmail('');
        setPhone('');
    }

    const handleRemoveContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    }

    return (

        <>        
            <h1>Criar novo contato</h1>

            <div style={{display: "flex", flexDirection: "column"}}>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} />    
                </div>
                <div>
                    <label htmlFor="name">email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label htmlFor="name">phone</label>
                    <input type="tel" onChange={(e) => setPhone(e.target.value)} value={phone} />  
                </div>
                <div>
                    <button onClick={handleAddContact}>
                        Adicionar contato
                    </button>
                </div>
            </div> 
            
            <hr />

            <h2>Seus contatos</h2>
            {contacts.map((contact) => (
                <div key={contact.id} style={{marginBottom: '10px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px'}}>
                    <p>Nome: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Telefone: {contact.phone}</p>
                    <button onClick={() => handleRemoveContact(contact.id)}>Remover contato</button>
                </div>
            ))}

        </>
    )
}

export default Contatos;
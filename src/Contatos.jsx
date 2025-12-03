import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Contatos = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [contacts, setContacts] = useState([]);

    // Para edição
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPhone, setEditPhone] = useState("");

    const handleAddContact = () => {
        if (!name.trim() || !email.trim() || !phone.trim()) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const newContact = {
            id: uuidv4(),
            name,
            email,
            phone,
        };

        setContacts([...contacts, newContact]);

        setName("");
        setEmail("");
        setPhone("");
    };

    const handleEditContact = (contact) => {
        setEditingId(contact.id);

        // Preencher os valores iniciais
        setEditName(contact.name);
        setEditEmail(contact.email);
        setEditPhone(contact.phone);
    };

    const handleSaveContact = (id) => {
        const updatedContacts = contacts.map((c) => {
            if (c.id === id) {
                return {
                    ...c,
                    name: editName,
                    email: editEmail,
                    phone: editPhone,
                };
            }
            return c;
        });

        setContacts(updatedContacts);
        setEditingId(null); // sair do modo edição
    };

    const handleRemoveContact = (id) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    return (
        <>
            <h1>Criar novo contato</h1>

            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <label>Nome</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label>Telefone</label>
                    <input
                        type="tel"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div>
                    <button onClick={handleAddContact}>Adicionar contato</button>
                </div>
            </div>

            <hr />

            <h2>Seus contatos</h2>

            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    style={{
                        marginBottom: "10px",
                        backgroundColor: "#f0f0f0",
                        padding: "10px",
                        borderRadius: "5px",
                    }}
                >
                    {editingId === contact.id ? (
                        <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p>Nome:</p>
                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    placeholder="Nome"
                                    style={{ height: 'fit-content' }}
                                />
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p>Nome:</p>
                                <input
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                    placeholder="Email"
                                    style={{ height: 'fit-content' }}
                                />
                            </div>

                            <div style={{ display: "flex", alignItems: "center" }}>
                                <p>Nome:</p>
                                <input
                                    value={editPhone}
                                    onChange={(e) => setEditPhone(e.target.value)}
                                    placeholder="Telefone"
                                    style={{ height: 'fit-content' }}
                                />
                            </div>

                            <button onClick={() => handleSaveContact(contact.id)}>
                                Salvar
                            </button>
                        </div>
                    ) : (
                        <>
                            <p>Nome: {contact.name}</p>
                            <p>Email: {contact.email}</p>
                            <p>Telefone: {contact.phone}</p>

                            <button onClick={() => handleEditContact(contact)}>
                                Editar contato
                            </button>

                            <button onClick={() => handleRemoveContact(contact.id)}>
                                Remover contato
                            </button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default Contatos;

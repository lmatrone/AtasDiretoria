pragma solidity 0.5.9;

contract DeliberacoesConselhoAdm {
    
    struct AtadeReuniao {
        string pauta;
        string decisao;
        string data;
    }
    
    AtadeReuniao[] public livro1;
    mapping(string => AtadeReuniao) public livro2;
    
    function ArquivarAta(string memory paramPauta, string memory paramDecisao, string memory paramData) public {
        AtadeReuniao memory novaAta = AtadeReuniao(paramPauta, paramDecisao, paramData);
        livro1.push(novaAta);
        livro2[paramPauta] = novaAta;
    }
    
    function ConsultaDeliberacoesConselho(uint numeroAta) public view returns (string memory) {
        return livro1[numeroAta].decisao;
    }
}

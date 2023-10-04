@WebServlet("/registro")
public class RegistroServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");

        Connection conn = ConexaoDB.conectar();

        // Valide os dados (neste exemplo, apenas verifique se nenhum campo está vazio)
        if (nome.isEmpty() || email.isEmpty() || senha.isEmpty()) {
            response.sendRedirect("pagina-de-erro.jsp");
            return;
        }

        try {
            // Execute a inserção no banco de dados
            String sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, nome);
            statement.setString(2, email);
            statement.setString(3, senha);

            int rowsAffected = statement.executeUpdate();
            statement.close();

            if (rowsAffected > 0) {
                // Registro inserido com sucesso
                response.sendRedirect("pagina-de-sucesso.jsp");
            } else {
                // Erro ao inserir registro
                response.sendRedirect("pagina-de-erro.jsp");
            }
        } catch (SQLException e) {
            // Trate exceções de SQL
            e.printStackTrace();
            response.sendRedirect("pagina-de-erro.jsp");
        } finally {
            // Feche a conexão
            ConexaoDB.fecharConexao(conn);
        }
    }
}

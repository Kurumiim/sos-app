@WebServlet("/login")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String email = request.getParameter("email");
        String senha = request.getParameter("senha");

        Connection conn = ConexaoDB.conectar();

        try {
            // Verifique as credenciais no banco de dados
            String sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?";

            PreparedStatement statement = conn.prepareStatement(sql);
            statement.setString(1, email);
            statement.setString(2, senha);

            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                // Credenciais válidas, usuário logado com sucesso
                response.sendRedirect("pagina-de-perfil.jsp");
            } else {
                // Credenciais inválidas, redirecione para a página de erro
                response.sendRedirect("pagina-de-erro.jsp");
            }

            statement.close();
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

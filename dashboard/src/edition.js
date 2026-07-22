/**
 * Edição de build do dashboard, selecionada por variável de ambiente Vite
 * (`VITE_EDITION`). `full` (padrão) mantém todos os setores; `financeiro`
 * gera um recorte de deploy apenas do setor financeiro.
 */
export const EDITION = import.meta.env.VITE_EDITION || 'full'
export const isFinanceiro = EDITION === 'financeiro'

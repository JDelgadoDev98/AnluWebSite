// Única fuente de verdad para datos de contacto y marca.
export const SITE = {
  name: 'SAC - Servicios Administrativos y Contables',
  shortName: 'SAC',
  url: 'https://anlu-web.pages.dev',
  phone: '573218321960',
  phoneDisplay: '+57 321 832 1960',
  email: 'servicioscontableslunal@gmail.com',
  founder: 'Ana María Luna',
  country: 'CO',
} as const;

export const whatsappLink = (message: string): string =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;

export interface Package {
  name: string;
  price: string;
  priceValue: number;
  ideal: string;
  featured: boolean;
  limit: string;
  includes: string[];
}

export const PACKAGES: Package[] = [
  {
    name: 'Paquete Básico',
    price: '$300.000',
    priceValue: 300000,
    ideal: 'Personas independientes, emprendedores y pequeños negocios con movimiento contable moderado.',
    featured: false,
    limit: 'Hasta 50 documentos contables/mes y 2 cuentas bancarias.',
    includes: [
      'Registro y clasificación de ingresos y gastos',
      'Causación de facturas de compra',
      'Organización de documentos contables',
      'Conciliación bancaria básica',
      'Control básico de cuentas por cobrar y pagar',
      'Estados financieros básicos',
      'Informe contable mensual',
      'Asesoría contable básica',
      'Recepción y organización de documentos virtual',
    ],
  },
  {
    name: 'Paquete Emprendedor',
    price: '$500.000',
    priceValue: 500000,
    ideal: 'Emprendimientos y pequeñas empresas con mayor movimiento que requieren acompañamiento más completo.',
    featured: true,
    limit: 'Hasta 100 documentos contables/mes y 3 cuentas bancarias.',
    includes: [
      'Todo lo del Paquete Básico',
      'Registro de hasta 100 documentos mensuales',
      'Conciliaciones bancarias',
      'Informe de cartera',
      'Informe de cuentas por pagar',
      'Seguimiento de ingresos y gastos',
      'Informe financiero',
      'Análisis básico de resultados',
      'Revisión de obligaciones tributarias',
      'Asesoría contable mensual',
    ],
  },
  {
    name: 'Paquete Integral',
    price: '$1.000.000',
    priceValue: 1000000,
    ideal: 'Pequeñas empresas que buscan delegar gran parte de la gestión contable y recibir acompañamiento periódico.',
    featured: false,
    limit: 'Hasta 200 documentos contables/mes y 5 cuentas bancarias.',
    includes: [
      'Todo lo del Paquete Emprendedor',
      'Registro de hasta 200 documentos mensuales',
      'Conciliaciones bancarias completas',
      'Informe de cartera y proveedores',
      'Informes financieros mensuales',
      'Facturación electrónica (precio adicional)',
      'Asesoría contable y tributaria',
      'Reunión mensual de seguimiento',
      'Acompañamiento personalizado',
    ],
  },
];

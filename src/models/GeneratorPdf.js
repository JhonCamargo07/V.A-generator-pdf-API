const utils = require('./../utils/utils');
const { join } = require('path');

const fonts = require('./../utils/fonts');
const styles = require('./../utils/styles');

const PdfPrinter = require('pdfmake');
const printer = new PdfPrinter(fonts);

const values1 = ['honesta', 'bondadosa', 'solidaria', 'honrada', 'de confianza', 'amigable', 'sociable'];
const values2 = ['trabajadora', 'aut\u00f3noma', 'organizada', 'emp\u00e1tica'];
const values3 = ['responsable', 'respetuosa', 'perseverante', 'sincera', 'educada'];
const values4 = ['cumplidora de su deber', 'colaboradora', 'tolerante', 'prudente', 'eficiente'];

exports.generatePersonalCard = (personalCard) => {
	let identifyPeopleCertifier = 'identificado';
	if (!personalCard.isManPeopleCertifier) {
		identifyPeopleCertifier = 'identificada';
	}

	let prefixPeopleCertified = 'al se\u00f1or';
	let identifyPeopleCertified = 'identificado';
	if (!personalCard.isManPeopleCertified) {
		prefixPeopleCertified = 'a la se\u00f1ora';
		identifyPeopleCertified = 'identificada';
	}

	personalCard.originDocumentPeopleCertified =
		personalCard.originDocumentPeopleCertified == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertified;

	personalCard.originDocumentPeopleCertifier =
		personalCard.originDocumentPeopleCertifier == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertifier;

	if (personalCard.addresPeopleCertified != undefined) {
		personalCard.addresPeopleCertified = utils.firstChartUpperCase(personalCard.addresPeopleCertified);
	}

	const fecha = new Date();
	let contentCard = {
		pageSize: 'LETTER',
		content: [
			{ text: 'CERTIFICACI\u00d3N PERSONAL', style: ['header', 'bold'] },
			{
				text: [
					`Por medio de la presente, yo `,
					{ text: `${personalCard.namePeopleCertifier} `, style: 'bold' },
					`${identifyPeopleCertifier} con ${personalCard.documentTypePeopleCertifier} `,
					{
						text: `No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}, `,
						style: 'bold',
					},
					`certifico que conozco desde hace ${personalCard.acquaintanceTime} a\u00f1os ${prefixPeopleCertified} `,
					{ text: `${personalCard.namePeopleCertified} `, style: 'bold' },
					`${identifyPeopleCertified} con ${personalCard.documentTypePeopleCertified} `,
					{
						text: `No. ${personalCard.documentPeopleCertified}${personalCard.originDocumentPeopleCertified}, `,
						style: 'bold',
					},
					` es una persona ${values1[Math.floor(Math.random() * values1.length)]}, ${
						values2[Math.floor(Math.random() * values2.length)]
					}, ${values3[Math.floor(Math.random() * values3.length)]} y ${
						values4[Math.floor(Math.random() * values4.length)]
					}.`,
				],
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Por tal motivo doy fe.',
				style: ['parrafo', 'marginTop'],
			},
			{
				text: `Se expide en Bogot\u00e1, a los ${utils.getDateNow()} d\u00edas del mes de ${utils.getNameMonth(
					fecha.getMonth()
				)} de ${fecha.getFullYear()}.`,
				style: ['parrafo', 'marginTop'],
			},
			{ text: 'Att:', style: ['marginFirma', 'bold'] },
			{
				text: `${utils.getUnderscoreForSignature(personalCard.namePeopleCertifier.length)}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `${personalCard.namePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{
				text: `${personalCard.prefixDocumentTypePeopleCertifier}: No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `CEL: ${personalCard.phonePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{
				text: `${personalCard.addresPeopleCertified != undefined ? 'DIR: ' + personalCard.addresPeopleCertified : ''}`,
				style: ['marginRight', 'bold', 'font13'],
			},
		],
		styles: styles,
	};

	const nameFile = utils.createPdf(printer, contentCard);

	return nameFile;
};

exports.generateFamilyCard = (personalCard) => {
	let identifyPeopleCertifier = 'identificado';
	if (!personalCard.isManPeopleCertifier) {
		identifyPeopleCertifier = 'identificada';
	}

	let prefixPeopleCertified = 'al se\u00f1or';
	let identifyPeopleCertified = 'identificado';
	if (!personalCard.isManPeopleCertified) {
		prefixPeopleCertified = 'a la se\u00f1ora';
		identifyPeopleCertified = 'identificada';
	}

	personalCard.originDocumentPeopleCertified =
		personalCard.originDocumentPeopleCertified == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertified;

	personalCard.originDocumentPeopleCertifier =
		personalCard.originDocumentPeopleCertifier == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertifier;

	const fecha = new Date();
	let contentCard = {
		pageSize: 'LETTER',
		content: [
			{ text: 'CERTIFICACI\u00d3N FAMILIAR', style: ['header', 'bold'] },
			{
				text: [
					`Por medio de la presente, yo `,
					{ text: `${personalCard.namePeopleCertifier} `, style: 'bold' },
					`${identifyPeopleCertifier} con ${personalCard.documentTypePeopleCertifier} `,
					{
						text: `No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}, `,
						style: 'bold',
					},
					`certifico que conozco de toda la vida ${prefixPeopleCertified} `,
					{ text: `${personalCard.namePeopleCertified} `, style: 'bold' },
					`${identifyPeopleCertified} con ${personalCard.documentTypePeopleCertified} `,
					{
						text: `No. ${personalCard.documentPeopleCertified}${personalCard.originDocumentPeopleCertified}, `,
						style: 'bold',
					},

					` es una persona ${values1[Math.floor(Math.random() * values1.length)]}, ${
						values2[Math.floor(Math.random() * values2.length)]
					}, ${values3[Math.floor(Math.random() * values3.length)]} y ${
						values4[Math.floor(Math.random() * values4.length)]
					}.`,
				],
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Por tal motivo doy fe.',
				style: ['parrafo', 'marginTop'],
			},
			{
				text: `Se expide en Bogot\u00e1, a los ${utils.getDateNow()} d\u00edas del mes de ${utils.getNameMonth(
					fecha.getMonth()
				)} de ${fecha.getFullYear()}.`,
				style: ['parrafo', 'marginTop'],
			},
			{ text: 'Att:', style: ['marginFirma', 'bold'] },
			{
				text: `${utils.getUnderscoreForSignature(personalCard.namePeopleCertifier.length)}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `${personalCard.namePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
			{
				text: `${personalCard.prefixDocumentTypePeopleCertifier}: No. ${personalCard.documentPeopleCertifier}${personalCard.originDocumentPeopleCertifier}`,
				style: ['marginRight', 'bold', 'font13'],
			},
			{ text: `CEL: ${personalCard.phonePeopleCertifier}`, style: ['marginRight', 'bold', 'font13'] },
		],
		styles: styles,
	};

	const nameFile = utils.createPdf(printer, contentCard);

	return nameFile;
};
exports.generateComunityCard = (personalCard) => {
	let prefixPeopleCertified = 'el se\u00f1or';
	let identifyPeopleCertified = 'identificado';
	if (!personalCard.isManPeopleCertified) {
		prefixPeopleCertified = 'la se\u00f1ora';
		identifyPeopleCertified = 'identificada';
		personalCard.homePeopleCertified = personalCard.homePeopleCertified.slice(0, -1) + 'a';
	}

	personalCard.originDocumentPeopleCertified =
		personalCard.originDocumentPeopleCertified == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertified;

	personalCard.originDocumentPeopleCertifier =
		personalCard.originDocumentPeopleCertifier == undefined ? '' : ' de ' + personalCard.originDocumentPeopleCertifier;

	const fecha = new Date();
	let contentCard = {
		pageSize: 'LETTER',
		footer: {
			columns: [
				'Calle 80 B  No. 23 A-24',
				{ text: 'Tel\u00e9fono: 3170000000', alignment: 'center' },
				{ text: 'Correo: jaccomual@gmail.com', alignment: 'right' },
			],
			style: ['font9', 'superMargin2'],
		},
		content: [
			{
				image: `${join(__dirname, '../public/img/header.png')}`,
				width: 500,
				style: ['alignCenter'],
			},
			{
				text: `Bogot\u00e1, ${utils.getDateNow()} de ${utils.getNameMonth(fecha.getMonth())} de ${fecha.getFullYear()}.`,
				style: ['parrafo', 'marginTop', 'alignRight', 'bold'],
			},
			{ text: 'CERTIFICACI\u00d3N', style: ['header2', 'bold'] },
			{
				text: [
					`El suscrito Presidente de la Junta de Acci\u00f3n Comunal del `,
					{ text: `Barrio RECUERDO SUR`, style: ['bold'] },
					`, certifica que ${prefixPeopleCertified} `,
					{ text: `${personalCard.namePeopleCertified} `, style: 'bold' },
					`${identifyPeopleCertified} con ${personalCard.documentTypePeopleCertified} `,
					{
						text: `No. ${personalCard.documentPeopleCertified}${personalCard.originDocumentPeopleCertified}, `,
						style: 'bold',
					},
					`reside desde hace ${personalCard.acquaintanceTime} a\u00f1os `,
					`en la ${personalCard.addresPeopleCertified} como ${personalCard.homePeopleCertified}, cel ${
						personalCard.phonePeopleCertified
					}, vive con su núcleo familiar,  se distingue en la comunidad como una persona ${
						values1[Math.floor(Math.random() * values1.length)]
					}, ${values2[Math.floor(Math.random() * values2.length)]}, ${
						values3[Math.floor(Math.random() * values3.length)]
					} y ${values4[Math.floor(Math.random() * values4.length)]}.`,
				],
				style: ['parrafo', 'superMargin'],
			},
			{
				text: 'Cordialmente.',
				style: ['parrafo', 'marginTop'],
			},
			{
				image: `${join(__dirname, '../public/img/firma.png')}`,
				width: 500,
				style: ['alignCenter', 'marginFirmaImg'],
			},
		],
		styles: styles,
	};

	const nameFile = utils.createPdf(printer, contentCard);

	return nameFile;
};

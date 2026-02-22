import type { Lang } from './config';

export type Translations = {
	nav: {
		terms: string;
		privacy: string;
	};
	home: {
		title: string;
		tagline: string;
		description: string;
		conceptTitle: string;
		concept1: string;
		concept1Detail: string;
		concept2: string;
		concept2Detail: string;
		concept3: string;
		concept3Detail: string;
		concept4: string;
		concept4Detail: string;
		featuresTitle: string;
		closetTitle: string;
		closetDesc: string;
		coordinateTitle: string;
		coordinateDesc: string;
		maintenanceTitle: string;
		maintenanceDesc: string;
		ownersTitle: string;
		ownersDesc: string;
		useCasesTitle: string;
		useCase1: string;
		useCase1Detail: string;
		useCase2: string;
		useCase2Detail: string;
		useCase3: string;
		useCase3Detail: string;
		useCase4: string;
		useCase4Detail: string;
		platformTitle: string;
		platformDesc: string;
		cta: string;
		ctaSoon: string;
	};
	terms: {
		title: string;
		lastUpdated: string;
		sections: Array<{ title: string; body: string }>;
	};
	privacy: {
		title: string;
		lastUpdated: string;
		sections: Array<{ title: string; body: string }>;
	};
	footer: {
		copyright: string;
		terms: string;
		privacy: string;
	};
};

const en: Translations = {
	nav: {
		terms: 'Terms of Use',
		privacy: 'Privacy Policy',
	},
	home: {
		title: 'CLOZE',
		tagline: 'Your personal closet, organized.',
		description:
			'An iOS app to manage your wardrobe with photos—track outfits, maintenance history, and more. Switch between multiple "owners" and manage the whole family\'s clothes in one place.',
		conceptTitle: 'Concept',
		concept1: 'See what you don\'t wear anymore',
		concept1Detail:
			'View items by photo and tell at a glance what you wear often and what has been sitting unused.',
		concept2: 'Manage clothes as assets',
		concept2Detail:
			'Record purchase price, date, and place to see how much cost-per-wear you get.',
		concept3: 'Outfits and maintenance in one place',
		concept3Detail:
			'Track when you wore which outfit and when you cleaned or repaired items.',
		concept4: 'Family-wide closet',
		concept4Detail:
			'Data is fully separated per owner, with easy switching inside the same app.',
		featuresTitle: 'Features',
		closetTitle: 'Closet',
		closetDesc:
			'Grid view by category, bulk import and edit, archive items you no longer keep.',
		coordinateTitle: 'Outfits',
		coordinateDesc: 'Calendar view of daily outfits and coordinate templates.',
		maintenanceTitle: 'Maintenance',
		maintenanceDesc: 'Record cleaning, repairs, and care; link to items and wear count.',
		ownersTitle: 'Multiple owners',
		ownersDesc: 'Switch between owners; each has separate items, outfits, and maintenance.',
		useCasesTitle: 'Use cases',
		useCase1: 'Seasonal inventory',
		useCase1Detail: 'Review your wardrobe by season and spot duplicates or unused items.',
		useCase2: 'Kids\' clothes & uniforms',
		useCase2Detail: 'Track growth and replacement cycles easily.',
		useCase3: 'Care for valuable items',
		useCase3Detail: 'Log cleaning and repairs for coats and shoes so you know when to care next.',
		useCase4: 'Daily outfit log',
		useCase4Detail: 'Look back at outfits on a calendar and check wear patterns.',
		platformTitle: 'Platform',
		platformDesc: 'iOS / iPadOS native app built with SwiftUI. Data stays on device (SwiftData).',
		cta: 'Download on the App Store',
		ctaSoon: 'Coming soon',
	},
	terms: {
		title: 'Terms of Use',
		lastUpdated: 'Last updated: [DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. Acceptance',
				body: 'By using the CLOZE application ("App"), you agree to these Terms of Use. If you do not agree, please do not use the App.',
			},
			{
				title: '2. Use of the App',
				body: 'You may use the App for personal, non-commercial purposes in accordance with these terms and applicable laws. [Add any usage restrictions specific to your app here.]',
			},
			{
				title: '3. Intellectual Property',
				body: 'All content and materials in the App, including but not limited to software, design, and text, are owned by the developer or licensors and are protected by intellectual property laws.',
			},
			{
				title: '4. Disclaimer',
				body: 'The App is provided "as is" without warranties of any kind. [Customize disclaimers as needed for your jurisdiction.]',
			},
			{
				title: '5. Limitation of Liability',
				body: '[PLACEHOLDER: Insert limitation of liability clause appropriate for your jurisdiction.]',
			},
			{
				title: '6. Changes',
				body: 'We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.',
			},
			{
				title: '7. Contact',
				body: '[PLACEHOLDER: Insert contact method for questions about these Terms.]',
			},
		],
	},
	privacy: {
		title: 'Privacy Policy',
		lastUpdated: 'Last updated: [DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. Data We Handle',
				body: 'CLOZE stores your wardrobe data (photos, item details, outfits, maintenance records) locally on your device. We do not collect or transmit this data to our servers.',
			},
			{
				title: '2. Local-Only Storage',
				body: 'All data you enter in the App is stored on your device using the device\'s local storage (e.g. SwiftData). No account or cloud sync is required unless we add such features in the future.',
			},
			{
				title: '3. Photos',
				body: 'The App may access your photo library or camera only when you choose to add or import images. These images are stored locally and are not sent to us.',
			},
			{
				title: '4. Analytics and Third Parties',
				body: '[PLACEHOLDER: If you use analytics or third-party SDKs, describe them here. If not, state "We do not use third-party analytics or advertising in the App."]',
			},
			{
				title: '5. Changes to This Policy',
				body: 'We may update this Privacy Policy. We will indicate the "Last updated" date at the top. Continued use of the App after changes constitutes acceptance.',
			},
			{
				title: '6. Contact',
				body: '[PLACEHOLDER: Insert contact method for privacy-related questions.]',
			},
		],
	},
	footer: {
		copyright: '© [YEAR_PLACEHOLDER] CLOZE. All rights reserved.',
		terms: 'Terms of Use',
		privacy: 'Privacy Policy',
	},
};

const ja: Translations = {
	nav: {
		terms: '利用規約',
		privacy: 'プライバシーポリシー',
	},
	home: {
		title: 'CLOZE',
		tagline: 'パーソナルクローゼットを、もっとシンプルに。',
		description:
			'写真でクローゼットを管理し、コーディネートやメンテナンス履歴まで一括で記録できる iOS アプリです。複数の「持ち主」を切り替えて、家族全員の服を一元管理できます。',
		conceptTitle: 'コンセプト',
		concept1: '「なんとなく着なくなった服」を可視化',
		concept1Detail:
			'写真ベースでアイテムを一覧し、「よく着ている服」「しばらく着ていない服」がひと目でわかります。',
		concept2: '服の"資産"としての管理',
		concept2Detail:
			'購入価格・購入日・購入場所を記録し、「どれくらいコスパ良く着られているか」を把握できます。',
		concept3: 'コーデとメンテの履歴を一元管理',
		concept3Detail:
			'いつ・どのコーデで着たか、いつクリーニングやお手入れをしたかを紐づけて記録します。',
		concept4: '家族単位でのクローゼット管理',
		concept4Detail:
			'持ち主ごとにデータを完全に分離しつつ、同じアプリ内で簡単に切り替え可能です。',
		featuresTitle: '主な機能',
		closetTitle: 'クローゼット',
		closetDesc:
			'カテゴリ別グリッド表示、一括インポート・一括編集、手放したアイテムのアーカイブ。',
		coordinateTitle: 'コーディネート',
		coordinateDesc: '日々のコーデをカレンダーで表示。コーデテンプレートで時短。',
		maintenanceTitle: 'メンテナンス',
		maintenanceDesc: 'クリーニング・修理・お手入れを記録。アイテムと着用回数と連携。',
		ownersTitle: '複数持ち主',
		ownersDesc: '持ち主を切り替えて、アイテム・コーデ・メンテを完全に分離して管理。',
		useCasesTitle: '主なユースケース',
		useCase1: 'シーズンごとの棚卸し',
		useCase1Detail: 'シーズンごとに手持ちの服を一覧し、「似た服」「着ていない服」を把握。',
		useCase2: '子どもの服・制服の管理',
		useCase2Detail: '成長に応じた買い替えサイクルを記録しやすくします。',
		useCase3: '高価なアイテムのメンテ履歴',
		useCase3Detail: 'コートや靴などのクリーニング／修理履歴を残し、手入れのタイミングを把握。',
		useCase4: '日々のコーデ記録',
		useCase4Detail: '日々のコーデをカレンダーで振り返り、「着回しの偏り」をチェック。',
		platformTitle: '対応プラットフォーム',
		platformDesc: 'iOS / iPadOS ネイティブアプリ（SwiftUI）。データは端末内に保存（SwiftData）。',
		cta: 'App Store でダウンロード',
		ctaSoon: '近日公開',
	},
	terms: {
		title: '利用規約',
		lastUpdated: '最終更新日：[DATE_PLACEHOLDER]',
		sections: [
			{
				title: '第1条（適用）',
				body: 'CLOZE アプリ（「本アプリ」）をご利用いただくことで、本利用規約に同意したものとみなします。同意されない場合は、本アプリをご利用にならないでください。',
			},
			{
				title: '第2条（利用）',
				body: '本アプリは、本規約および法令に従い、個人の非商用目的でご利用ください。[アプリに応じた利用制限があればここに記載してください。]',
			},
			{
				title: '第3条（知的財産権）',
				body: '本アプリに含まれるソフトウェア、デザイン、テキスト等のコンテンツは、開発者または権利者に帰属し、知的財産権により保護されています。',
			},
			{
				title: '第4条（免責）',
				body: '本アプリは「現状のまま」提供されます。免責事項はお住まいの法域に合わせてカスタマイズしてください。',
			},
			{
				title: '第5条（責任の制限）',
				body: '[プレースホルダー：お住まいの法域に応じた責任制限条項を記載してください。]',
			},
			{
				title: '第6条（変更）',
				body: '本規約は予告なく変更することがあります。変更後も本アプリを利用し続けた場合、変更後の規約に同意したものとみなします。',
			},
			{
				title: '第7条（お問い合わせ）',
				body: '[プレースホルダー：本規約に関するお問い合わせ先を記載してください。]',
			},
		],
	},
	privacy: {
		title: 'プライバシーポリシー',
		lastUpdated: '最終更新日：[DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. 取り扱うデータ',
				body: 'CLOZE は、クローゼットデータ（写真、アイテム情報、コーデ、メンテ履歴など）をお使いの端末内にのみ保存します。当方のサーバーへこれらのデータを送信したり収集したりすることはありません。',
			},
			{
				title: '2. ローカル保存',
				body: '本アプリで入力されたデータは、端末のローカルストレージ（例：SwiftData）に保存されます。アカウントやクラウド同期は、将来そのような機能を追加しない限り不要です。',
			},
			{
				title: '3. 写真',
				body: '本アプリは、画像の追加やインポートをユーザーが選択した場合にのみ、フォトライブラリまたはカメラにアクセスします。これらの画像は端末内に保存され、当方へ送信されません。',
			},
			{
				title: '4. 分析・第三者',
				body: '[プレースホルダー：分析ツールや第三者SDKを使用する場合はここに記載してください。使用しない場合は「本アプリでは第三者による分析・広告は利用していません」と記載してください。]',
			},
			{
				title: '5. ポリシーの変更',
				body: '本プライバシーポリシーは変更することがあります。変更後も本アプリの利用を継続した場合、変更後のポリシーに同意したものとみなします。',
			},
			{
				title: '6. お問い合わせ',
				body: '[プレースホルダー：プライバシーに関するお問い合わせ先を記載してください。]',
			},
		],
	},
	footer: {
		copyright: '© [YEAR_PLACEHOLDER] CLOZE. All rights reserved.',
		terms: '利用規約',
		privacy: 'プライバシーポリシー',
	},
};

export const translations: Record<Lang, Translations> = { en, ja };

export function getTranslations(lang: Lang): Translations {
	return translations[lang] ?? translations.en;
}

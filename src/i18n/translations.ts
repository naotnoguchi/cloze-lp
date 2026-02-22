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
		platformDesc:
			'iOS / iPadOS native app built with SwiftUI. Data is stored on your device and may sync privately across your devices via iCloud under the same Apple ID.',
		cta: 'Download on the App Store',
		ctaSoon: 'Coming soon',
	},
	terms: {
		title: 'Terms of Use',
		lastUpdated: 'Last updated: [DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. Scope and Acceptance',
				body: 'These Terms of Use apply to your use of the CLOZE application ("App"). By downloading, accessing, or using the App, you agree to these Terms. If you do not agree, you must not use the App.',
			},
			{
				title: '2. Service Description',
				body: 'The App provides wardrobe and clothing management features, including photo-based item management, outfit records, and maintenance records. Features may be added, changed, suspended, or discontinued at any time.',
			},
			{
				title: '3. Subscription and Billing',
				body: 'The App may offer auto-renewable subscriptions. Subscription fees are charged to your Apple ID account and automatically renew unless canceled at least 24 hours before the end of the current period. You can manage or cancel subscriptions in the Settings app on your Apple device (Apple ID > Subscriptions).',
			},
			{
				title: '4. Payment Processing (Apple and RevenueCat)',
				body: 'All in-app purchases and subscription payments are processed by Apple, not by us. Refunds, billing issues, and payment disputes are handled under Apple policies. We do not receive or store your credit card information. Subscription status and purchase history may be managed via RevenueCat for entitlement management.',
			},
			{
				title: '5. User Responsibilities',
				body: 'You are responsible for your own use of the App and for maintaining backups of important data where necessary. You must comply with applicable laws and must not use the App for unlawful or abusive purposes.',
			},
			{
				title: '6. Intellectual Property Rights',
				body: 'All rights, title, and interest in and to the App, including software, design, trademarks, and related content, belong to us or our licensors. You retain rights to content you create in the App, but you grant us only the limited rights necessary to operate and provide the App where applicable.',
			},
			{
				title: '7. Disclaimer and Limitation of Liability',
				body: 'The App is provided on an "as is" and "as available" basis without warranties of any kind to the extent permitted by law. We are not liable for data loss, data corruption, interruption, suspension, or termination of the App, or for indirect, incidental, special, or consequential damages arising from use of the App, except where liability cannot be excluded under applicable law.',
			},
			{
				title: '8. Changes to the App and Terms',
				body: 'We may revise these Terms and may change, suspend, or discontinue all or part of the App at any time. Your continued use of the App after revised Terms become effective constitutes acceptance of those revised Terms.',
			},
			{
				title: '9. Governing Law and Jurisdiction',
				body: 'These Terms are governed by the laws of Japan. Any dispute arising out of or in connection with these Terms or the App shall be subject to the exclusive jurisdiction of the court having jurisdiction over our principal place of business in Japan, unless otherwise required by applicable law.',
			},
			{
				title: '10. Contact',
				body: 'For questions regarding these Terms, please contact us at: https://forms.gle/xUhdsWLCTaEx7F9o9',
			},
		],
	},
	privacy: {
		title: 'Privacy Policy',
		lastUpdated: 'Last updated: [DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. Scope',
				body: 'This Privacy Policy explains how CLOZE ("App") handles your information when you use the App.',
			},
			{
				title: '2. Data Processed in the App',
				body: 'The App processes data you create, including wardrobe photos, item details, outfit records, maintenance records, and app settings. This data is used to provide core app functions.',
			},
			{
				title: '3. Storage and iCloud Sync',
				body: 'Your data is stored on your device. If iCloud is enabled, data may sync through Apple\'s iCloud infrastructure only among devices signed in with the same Apple ID. Data is not publicly disclosed and is not shared with other users by default.',
			},
			{
				title: '4. Photo Library and Camera Access',
				body: 'The App accesses your photo library or camera only when you choose to import or capture images. Access can be changed in your device settings at any time.',
			},
			{
				title: '5. Payments, Apple, and RevenueCat',
				body: 'In-app purchases and subscriptions are processed by Apple. We do not receive or store your credit card details. We may use RevenueCat to verify purchase status and manage subscription entitlements. Refunds and billing are handled under Apple policies.',
			},
			{
				title: '6. Third Parties and Data Sharing',
				body: 'We do not sell your personal information. We do not provide your wardrobe content to advertisers. Data may be processed by Apple (e.g., iCloud and App Store billing) and by RevenueCat solely for subscription management.',
			},
			{
				title: '7. Data Retention and Deletion',
				body: 'Data remains on your device and, if enabled, in your iCloud account until you delete it. You can delete app data by removing records in the App or uninstalling the App and removing related iCloud data from your Apple account settings.',
			},
			{
				title: '8. Security',
				body: 'We take reasonable measures in app design to reduce unauthorized access risk. However, no method of electronic storage or transmission is completely secure.',
			},
			{
				title: '9. Children',
				body: 'The App is not directed to children under the age defined by applicable law in your jurisdiction without parental involvement. If you believe data was provided inappropriately, contact us.',
			},
			{
				title: '10. Changes to This Policy',
				body: 'We may update this Privacy Policy. The revised version becomes effective when posted in the App or on the website with an updated date.',
			},
			{
				title: '11. Contact',
				body: 'For privacy inquiries, contact us at: https://forms.gle/xUhdsWLCTaEx7F9o9',
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
		platformDesc:
			'iOS / iPadOS ネイティブアプリ（SwiftUI）。データは端末内に保存され、同一Apple IDのiCloud間で非公開同期される場合があります。',
		cta: 'App Store でダウンロード',
		ctaSoon: '近日公開',
	},
	terms: {
		title: '利用規約',
		lastUpdated: '最終更新日：[DATE_PLACEHOLDER]',
		sections: [
			{
				title: '第1条（適用および同意）',
				body: '本利用規約（以下「本規約」）は、CLOZE アプリ（以下「本アプリ」）の利用条件を定めるものです。ユーザーは、本アプリをダウンロード、アクセスまたは利用した時点で、本規約に同意したものとみなされます。',
			},
			{
				title: '第2条（サービス内容）',
				body: '本アプリは、衣類の管理、写真付きアイテム管理、コーディネート記録、メンテナンス履歴記録等の機能を提供します。これらの機能は、追加、変更、中断または終了される場合があります。',
			},
			{
				title: '第3条（サブスクリプションおよび課金）',
				body: '本アプリでは、自動更新サブスクリプションを提供する場合があります。料金はユーザーの Apple ID アカウントに請求され、現在の期間終了の24時間以上前に解約しない限り自動更新されます。解約およびプラン管理は、Apple 端末の「設定」アプリ（Apple ID > サブスクリプション）から行ってください。',
			},
			{
				title: '第4条（決済処理・AppleおよびRevenueCat）',
				body: '本アプリ内課金およびサブスクリプション決済は Apple が処理します。返金、請求、決済に関する事項は Apple のポリシーに従います。当方はユーザーのクレジットカード情報を保持しません。購入履歴および購読状態の管理には、権限管理のため RevenueCat を利用する場合があります。',
			},
			{
				title: '第5条（ユーザーの責任）',
				body: 'ユーザーは、自己の責任において本アプリを利用するものとし、必要に応じて重要なデータのバックアップを行うものとします。ユーザーは、法令または公序良俗に反する目的で本アプリを利用してはなりません。',
			},
			{
				title: '第6条（知的財産権）',
				body: '本アプリに関する著作権、商標権、その他一切の知的財産権は、当方または正当な権利者に帰属します。ユーザーが本アプリ内で作成したデータの権利はユーザーに帰属しますが、サービス提供に必要な範囲で当方に利用権を許諾するものとします。',
			},
			{
				title: '第7条（免責および責任制限）',
				body: '本アプリは「現状有姿」かつ「提供可能な範囲」で提供され、法令上許容される範囲で、明示または黙示を問わずいかなる保証も行いません。当方は、データ消失・毀損、サービス停止・中断・終了、または本アプリ利用に起因する間接損害、特別損害、結果的損害について責任を負いません。ただし、法令により免責が認められない場合を除きます。',
			},
			{
				title: '第8条（サービス内容および規約の変更）',
				body: '当方は、必要に応じて本アプリの内容を変更し、または提供を中断・終了することがあります。また、本規約を改定することがあります。改定後に本アプリを利用した場合、ユーザーは改定後の規約に同意したものとみなされます。',
			},
			{
				title: '第9条（準拠法および裁判管轄）',
				body: '本規約は日本法に準拠し、本規約または本アプリに関連して生じた紛争については、当方の主たる事業所所在地を管轄する日本の裁判所を第一審の専属的合意管轄裁判所とします。法令に別段の定めがある場合はこの限りではありません。',
			},
			{
				title: '第10条（お問い合わせ）',
				body: '本規約に関するお問い合わせ先：https://forms.gle/xUhdsWLCTaEx7F9o9',
			},
		],
	},
	privacy: {
		title: 'プライバシーポリシー',
		lastUpdated: '最終更新日：[DATE_PLACEHOLDER]',
		sections: [
			{
				title: '1. 適用範囲',
				body: '本プライバシーポリシーは、CLOZE（以下「本アプリ」）の利用に関連して当方が取り扱う情報について定めるものです。',
			},
			{
				title: '2. 本アプリで取り扱う情報',
				body: '本アプリは、ユーザーが入力・作成したクローゼット情報（写真、アイテム情報、コーデ記録、メンテナンス履歴、設定情報等）を取り扱い、アプリ機能の提供に利用します。',
			},
			{
				title: '3. 保存場所およびiCloud同期',
				body: 'データは端末内に保存されます。iCloud が有効な場合、Apple の iCloud 基盤を通じて、同一 Apple ID でサインインした端末間でのみ同期されることがあります。データが公開されることはなく、デフォルトで他ユーザーへ共有されません。',
			},
			{
				title: '4. 写真ライブラリ・カメラへのアクセス',
				body: '本アプリは、ユーザーが画像の取り込みまたは撮影を選択した場合に限り、写真ライブラリまたはカメラにアクセスします。アクセス権は端末設定からいつでも変更できます。',
			},
			{
				title: '5. 課金処理（Apple）およびRevenueCat',
				body: 'アプリ内課金およびサブスクリプション決済は Apple が処理します。当方はクレジットカード情報を取得・保持しません。購入状態の確認および購読権限管理のために RevenueCat を利用する場合があります。返金・請求に関する事項は Apple のポリシーに従います。',
			},
			{
				title: '6. 第三者提供および共有',
				body: '当方は、ユーザーの個人情報を販売しません。広告目的でクローゼットデータを第三者提供しません。Apple（iCloud、App Store決済等）および RevenueCat には、サービス提供に必要な範囲で情報が処理される場合があります。',
			},
			{
				title: '7. 保存期間と削除',
				body: 'データは、ユーザーが削除するまで端末内および（有効な場合）iCloud 上に保持されます。アプリ内での削除操作、またはアプリ削除と Apple アカウント設定での iCloud データ削除により消去できます。',
			},
			{
				title: '8. 安全管理',
				body: '当方は、情報への不正アクセス等を防止するために合理的な安全管理措置を講じます。ただし、電子的保存・通信手段において完全な安全性を保証するものではありません。',
			},
			{
				title: '9. 未成年者の利用',
				body: '本アプリは、法令で定める年齢未満の方による保護者関与のない利用を想定していません。不適切な情報提供があったと考えられる場合はご連絡ください。',
			},
			{
				title: '10. 本ポリシーの変更',
				body: '当方は、本ポリシーを改定する場合があります。改定後の内容は、本アプリまたはウェブサイトに掲載した時点（または別途定める時点）で効力を生じます。',
			},
			{
				title: '11. お問い合わせ',
				body: 'プライバシーに関するお問い合わせ先：https://forms.gle/xUhdsWLCTaEx7F9o9',
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

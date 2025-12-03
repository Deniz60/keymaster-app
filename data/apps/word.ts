import { Shortcut } from '@/types';

export const wordShortcuts: Shortcut[] = [
  // ============================================
  // FILE (Dosya)
  // ============================================
  {
    id: 'word-new-document',
    app: 'word',
    action: { en: 'New Document', tr: 'Yeni Belge' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
      tr: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
    },
    description: { en: 'Create a new blank document.', tr: 'Yeni boş belge oluştur.' },
  },
  {
    id: 'word-open-file',
    app: 'word',
    action: { en: 'Open File', tr: 'Dosya Aç' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
      tr: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
    },
    description: { en: 'Open an existing document.', tr: 'Mevcut belgeyi aç.' },
  },
  {
    id: 'word-save',
    app: 'word',
    action: { en: 'Save', tr: 'Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
      tr: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
    },
    description: { en: 'Save the current document.', tr: 'Mevcut belgeyi kaydet.' },
  },
  {
    id: 'word-save-as',
    app: 'word',
    action: { en: 'Save As', tr: 'Farklı Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
      tr: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
    },
    description: { en: 'Save document with a new name.', tr: 'Belgeyi yeni isimle kaydet.' },
  },
  {
    id: 'word-print',
    app: 'word',
    action: { en: 'Print', tr: 'Yazdır' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
      tr: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
    },
    description: { en: 'Open print dialog.', tr: 'Yazdırma penceresini aç.' },
  },
  {
    id: 'word-close-document',
    app: 'word',
    action: { en: 'Close Document', tr: 'Belgeyi Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
      tr: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
    },
    description: { en: 'Close the current document.', tr: 'Mevcut belgeyi kapat.' },
  },
  {
    id: 'word-close-app',
    app: 'word',
    action: { en: 'Close Application', tr: 'Uygulamayı Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
      tr: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
    },
    description: { en: 'Close Word application.', tr: 'Word uygulamasını kapat.' },
  },

  // ============================================
  // EDITING (Düzenleme)
  // ============================================
  {
    id: 'word-cut',
    app: 'word',
    action: { en: 'Cut', tr: 'Kes' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
      tr: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
    },
    description: { en: 'Cut selected text.', tr: 'Seçili metni kes.' },
  },
  {
    id: 'word-copy',
    app: 'word',
    action: { en: 'Copy', tr: 'Kopyala' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
      tr: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
    },
    description: { en: 'Copy selected text.', tr: 'Seçili metni kopyala.' },
  },
  {
    id: 'word-paste',
    app: 'word',
    action: { en: 'Paste', tr: 'Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
      tr: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
    },
    description: { en: 'Paste clipboard content.', tr: 'Pano içeriğini yapıştır.' },
  },
  {
    id: 'word-paste-special',
    app: 'word',
    action: { en: 'Paste Special', tr: 'Özel Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Alt', 'V'], mac: ['Cmd', 'Ctrl', 'V'] },
      tr: { win: ['Ctrl', 'Alt', 'V'], mac: ['Cmd', 'Ctrl', 'V'] },
    },
    description: { en: 'Open paste special dialog.', tr: 'Özel yapıştır penceresini aç.' },
  },
  {
    id: 'word-undo',
    app: 'word',
    action: { en: 'Undo', tr: 'Geri Al' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
      tr: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
    },
    description: { en: 'Undo the last action.', tr: 'Son işlemi geri al.' },
  },
  {
    id: 'word-redo',
    app: 'word',
    action: { en: 'Redo', tr: 'Yinele' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
      tr: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
    },
    description: { en: 'Redo the last undone action.', tr: 'Son geri alınan işlemi yinele.' },
  },
  {
    id: 'word-find',
    app: 'word',
    action: { en: 'Find', tr: 'Bul' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
      tr: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
    },
    description: { en: 'Open Find dialog.', tr: 'Bul penceresini aç.' },
  },
  {
    id: 'word-replace',
    app: 'word',
    action: { en: 'Find & Replace', tr: 'Bul ve Değiştir' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
      tr: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
    },
    description: { en: 'Open Find and Replace dialog.', tr: 'Bul ve Değiştir penceresini aç.' },
  },
  {
    id: 'word-go-to',
    app: 'word',
    action: { en: 'Go To', tr: 'Git' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'G'], mac: ['Cmd', 'Option', 'G'] },
      tr: { win: ['Ctrl', 'G'], mac: ['Cmd', 'Option', 'G'] },
    },
    description: { en: 'Go to a specific page, section, or bookmark.', tr: 'Belirli sayfa, bölüm veya yer işaretine git.' },
  },
  {
    id: 'word-select-all',
    app: 'word',
    action: { en: 'Select All', tr: 'Tümünü Seç' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] },
      tr: { win: ['Ctrl', 'Ü'], mac: ['Cmd', 'A'] }, // Türkçe Word'de farklı olabilir
    },
    description: { en: 'Select entire document.', tr: 'Tüm belgeyi seç.' },
  },
  {
    id: 'word-delete-word-left',
    app: 'word',
    action: { en: 'Delete Word Left', tr: 'Soldaki Kelimeyi Sil' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Backspace'], mac: ['Option', 'Backspace'] },
      tr: { win: ['Ctrl', 'Backspace'], mac: ['Option', 'Backspace'] },
    },
    description: { en: 'Delete word to the left.', tr: 'Soldaki kelimeyi sil.' },
  },
  {
    id: 'word-delete-word-right',
    app: 'word',
    action: { en: 'Delete Word Right', tr: 'Sağdaki Kelimeyi Sil' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Delete'], mac: ['Option', 'Delete'] },
      tr: { win: ['Ctrl', 'Delete'], mac: ['Option', 'Delete'] },
    },
    description: { en: 'Delete word to the right.', tr: 'Sağdaki kelimeyi sil.' },
  },

  // ============================================
  // FORMATTING (Biçimlendirme)
  // ============================================
  {
    id: 'word-bold',
    app: 'word',
    action: { en: 'Bold', tr: 'Kalın' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'B'], mac: ['Cmd', 'B'] },
      tr: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] }, // Türkçe Word'de Ctrl+K = Kalın
    },
    description: { en: 'Apply bold formatting.', tr: 'Kalın biçimlendirme uygula.' },
  },
  {
    id: 'word-italic',
    app: 'word',
    action: { en: 'Italic', tr: 'İtalik' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
      tr: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
    },
    description: { en: 'Apply italic formatting.', tr: 'İtalik biçimlendirme uygula.' },
  },
  {
    id: 'word-underline',
    app: 'word',
    action: { en: 'Underline', tr: 'Altı Çizili' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'U'], mac: ['Cmd', 'U'] },
      tr: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] }, // Türkçe Word'de Ctrl+A = Altı çizili
    },
    description: { en: 'Apply underline formatting.', tr: 'Altı çizili biçimlendirme uygula.' },
  },
  {
    id: 'word-strikethrough',
    app: 'word',
    action: { en: 'Strikethrough', tr: 'Üstü Çizili' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', '4'], mac: ['Cmd', 'Shift', 'X'] },
      tr: { win: ['Alt', 'H', '4'], mac: ['Cmd', 'Shift', 'X'] },
    },
    description: { en: 'Apply strikethrough formatting.', tr: 'Üstü çizili biçimlendirme uygula.' },
  },
  {
    id: 'word-subscript',
    app: 'word',
    action: { en: 'Subscript', tr: 'Alt Simge' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', '='], mac: ['Cmd', '='] },
      tr: { win: ['Ctrl', '='], mac: ['Cmd', '='] },
    },
    description: { en: 'Apply subscript formatting.', tr: 'Alt simge biçimlendirme uygula.' },
  },
  {
    id: 'word-superscript',
    app: 'word',
    action: { en: 'Superscript', tr: 'Üst Simge' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '+'], mac: ['Cmd', 'Shift', '+'] },
      tr: { win: ['Ctrl', 'Shift', '+'], mac: ['Cmd', 'Shift', '+'] },
    },
    description: { en: 'Apply superscript formatting.', tr: 'Üst simge biçimlendirme uygula.' },
  },
  {
    id: 'word-increase-font',
    app: 'word',
    action: { en: 'Increase Font Size', tr: 'Yazı Boyutunu Artır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '>'], mac: ['Cmd', 'Shift', '>'] },
      tr: { win: ['Ctrl', 'Shift', '>'], mac: ['Cmd', 'Shift', '>'] },
    },
    description: { en: 'Increase font size.', tr: 'Yazı boyutunu artır.' },
  },
  {
    id: 'word-decrease-font',
    app: 'word',
    action: { en: 'Decrease Font Size', tr: 'Yazı Boyutunu Azalt' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '<'], mac: ['Cmd', 'Shift', '<'] },
      tr: { win: ['Ctrl', 'Shift', '<'], mac: ['Cmd', 'Shift', '<'] },
    },
    description: { en: 'Decrease font size.', tr: 'Yazı boyutunu azalt.' },
  },
  {
    id: 'word-change-case',
    app: 'word',
    action: { en: 'Change Case', tr: 'Büyük/Küçük Harf Değiştir' },
    category: 'Formatting',
    keys: {
      en: { win: ['Shift', 'F3'], mac: ['Fn', 'Shift', 'F3'] },
      tr: { win: ['Shift', 'F3'], mac: ['Fn', 'Shift', 'F3'] },
    },
    description: { en: 'Toggle between upper/lower/title case.', tr: 'Büyük/küçük/başlık harfi arasında geçiş yap.' },
  },
  {
    id: 'word-clear-formatting',
    app: 'word',
    action: { en: 'Clear Formatting', tr: 'Biçimlendirmeyi Temizle' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
      tr: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
    },
    description: { en: 'Remove all formatting from selection.', tr: 'Seçimden tüm biçimlendirmeyi kaldır.' },
  },
  {
    id: 'word-font-dialog',
    app: 'word',
    action: { en: 'Font Dialog', tr: 'Yazı Tipi İletişim Kutusu' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
      tr: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
    },
    description: { en: 'Open font dialog box.', tr: 'Yazı tipi iletişim kutusunu aç.' },
  },
  {
    id: 'word-highlight',
    app: 'word',
    action: { en: 'Highlight', tr: 'Vurgula' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'I'], mac: ['Alt', 'H', 'I'] },
      tr: { win: ['Alt', 'H', 'I'], mac: ['Alt', 'H', 'I'] },
    },
    description: { en: 'Apply highlight to selection.', tr: 'Seçime vurgu uygula.' },
  },

  // ============================================
  // PARAGRAPH (Paragraf)
  // ============================================
  {
    id: 'word-align-left',
    app: 'word',
    action: { en: 'Align Left', tr: 'Sola Hizala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
      tr: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
    },
    description: { en: 'Align text to the left.', tr: 'Metni sola hizala.' },
  },
  {
    id: 'word-align-center',
    app: 'word',
    action: { en: 'Align Center', tr: 'Ortala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'E'], mac: ['Cmd', 'E'] },
      tr: { win: ['Ctrl', 'E'], mac: ['Cmd', 'E'] },
    },
    description: { en: 'Center align text.', tr: 'Metni ortala.' },
  },
  {
    id: 'word-align-right',
    app: 'word',
    action: { en: 'Align Right', tr: 'Sağa Hizala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
      tr: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
    },
    description: { en: 'Align text to the right.', tr: 'Metni sağa hizala.' },
  },
  {
    id: 'word-justify',
    app: 'word',
    action: { en: 'Justify', tr: 'İki Yana Yasla' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'J'], mac: ['Cmd', 'J'] },
      tr: { win: ['Ctrl', 'J'], mac: ['Cmd', 'J'] },
    },
    description: { en: 'Justify text.', tr: 'Metni iki yana yasla.' },
  },
  {
    id: 'word-increase-indent',
    app: 'word',
    action: { en: 'Increase Indent', tr: 'Girintiyi Artır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'M'], mac: ['Ctrl', 'Shift', 'M'] },
      tr: { win: ['Ctrl', 'M'], mac: ['Ctrl', 'Shift', 'M'] },
    },
    description: { en: 'Increase paragraph indent.', tr: 'Paragraf girintisini artır.' },
  },
  {
    id: 'word-decrease-indent',
    app: 'word',
    action: { en: 'Decrease Indent', tr: 'Girintiyi Azalt' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'M'], mac: ['Cmd', 'Shift', 'M'] },
      tr: { win: ['Ctrl', 'Shift', 'M'], mac: ['Cmd', 'Shift', 'M'] },
    },
    description: { en: 'Decrease paragraph indent.', tr: 'Paragraf girintisini azalt.' },
  },
  {
    id: 'word-line-spacing-1',
    app: 'word',
    action: { en: 'Single Line Spacing', tr: 'Tek Satır Aralığı' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', '1'], mac: ['Cmd', '1'] },
      tr: { win: ['Ctrl', '1'], mac: ['Cmd', '1'] },
    },
    description: { en: 'Set single line spacing.', tr: 'Tek satır aralığı ayarla.' },
  },
  {
    id: 'word-line-spacing-1.5',
    app: 'word',
    action: { en: '1.5 Line Spacing', tr: '1.5 Satır Aralığı' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', '5'], mac: ['Cmd', '5'] },
      tr: { win: ['Ctrl', '5'], mac: ['Cmd', '5'] },
    },
    description: { en: 'Set 1.5 line spacing.', tr: '1.5 satır aralığı ayarla.' },
  },
  {
    id: 'word-line-spacing-2',
    app: 'word',
    action: { en: 'Double Line Spacing', tr: 'Çift Satır Aralığı' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', '2'], mac: ['Cmd', '2'] },
      tr: { win: ['Ctrl', '2'], mac: ['Cmd', '2'] },
    },
    description: { en: 'Set double line spacing.', tr: 'Çift satır aralığı ayarla.' },
  },
  {
    id: 'word-bulleted-list',
    app: 'word',
    action: { en: 'Bulleted List', tr: 'Madde İşaretli Liste' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'L'], mac: ['Cmd', 'Shift', 'L'] },
      tr: { win: ['Ctrl', 'Shift', 'L'], mac: ['Cmd', 'Shift', 'L'] },
    },
    description: { en: 'Create a bulleted list.', tr: 'Madde işaretli liste oluştur.' },
  },

  // ============================================
  // NAVIGATION (Gezinme)
  // ============================================
  {
    id: 'word-go-to-beginning',
    app: 'word',
    action: { en: 'Go to Beginning', tr: 'Başlangıca Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Home'], mac: ['Cmd', 'Home'] },
      tr: { win: ['Ctrl', 'Home'], mac: ['Cmd', 'Home'] },
    },
    description: { en: 'Move to beginning of document.', tr: 'Belgenin başına git.' },
  },
  {
    id: 'word-go-to-end',
    app: 'word',
    action: { en: 'Go to End', tr: 'Sona Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'End'], mac: ['Cmd', 'End'] },
      tr: { win: ['Ctrl', 'End'], mac: ['Cmd', 'End'] },
    },
    description: { en: 'Move to end of document.', tr: 'Belgenin sonuna git.' },
  },
  {
    id: 'word-next-word',
    app: 'word',
    action: { en: 'Next Word', tr: 'Sonraki Kelime' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', '→'], mac: ['Option', '→'] },
      tr: { win: ['Ctrl', '→'], mac: ['Option', '→'] },
    },
    description: { en: 'Move to next word.', tr: 'Sonraki kelimeye git.' },
  },
  {
    id: 'word-previous-word',
    app: 'word',
    action: { en: 'Previous Word', tr: 'Önceki Kelime' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', '←'], mac: ['Option', '←'] },
      tr: { win: ['Ctrl', '←'], mac: ['Option', '←'] },
    },
    description: { en: 'Move to previous word.', tr: 'Önceki kelimeye git.' },
  },
  {
    id: 'word-next-paragraph',
    app: 'word',
    action: { en: 'Next Paragraph', tr: 'Sonraki Paragraf' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', '↓'], mac: ['Cmd', '↓'] },
      tr: { win: ['Ctrl', '↓'], mac: ['Cmd', '↓'] },
    },
    description: { en: 'Move to next paragraph.', tr: 'Sonraki paragrafa git.' },
  },
  {
    id: 'word-previous-paragraph',
    app: 'word',
    action: { en: 'Previous Paragraph', tr: 'Önceki Paragraf' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', '↑'], mac: ['Cmd', '↑'] },
      tr: { win: ['Ctrl', '↑'], mac: ['Cmd', '↑'] },
    },
    description: { en: 'Move to previous paragraph.', tr: 'Önceki paragrafa git.' },
  },
  {
    id: 'word-page-down',
    app: 'word',
    action: { en: 'Page Down', tr: 'Sayfa Aşağı' },
    category: 'Navigation',
    keys: {
      en: { win: ['Page Down'], mac: ['Fn', '↓'] },
      tr: { win: ['Page Down'], mac: ['Fn', '↓'] },
    },
    description: { en: 'Move down one page.', tr: 'Bir sayfa aşağı git.' },
  },
  {
    id: 'word-page-up',
    app: 'word',
    action: { en: 'Page Up', tr: 'Sayfa Yukarı' },
    category: 'Navigation',
    keys: {
      en: { win: ['Page Up'], mac: ['Fn', '↑'] },
      tr: { win: ['Page Up'], mac: ['Fn', '↑'] },
    },
    description: { en: 'Move up one page.', tr: 'Bir sayfa yukarı git.' },
  },

  // ============================================
  // SELECTION (Seçim)
  // ============================================
  {
    id: 'word-select-word',
    app: 'word',
    action: { en: 'Select Word', tr: 'Kelime Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', '→'], mac: ['Option', 'Shift', '→'] },
      tr: { win: ['Ctrl', 'Shift', '→'], mac: ['Option', 'Shift', '→'] },
    },
    description: { en: 'Select word to the right.', tr: 'Sağdaki kelimeyi seç.' },
  },
  {
    id: 'word-select-line',
    app: 'word',
    action: { en: 'Select Line', tr: 'Satır Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Home', 'Shift', 'End'], mac: ['Cmd', 'Shift', '→'] },
      tr: { win: ['Home', 'Shift', 'End'], mac: ['Cmd', 'Shift', '→'] },
    },
    description: { en: 'Select entire line.', tr: 'Tüm satırı seç.' },
  },
  {
    id: 'word-select-paragraph',
    app: 'word',
    action: { en: 'Select Paragraph', tr: 'Paragraf Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', '↓'], mac: ['Cmd', 'Shift', '↓'] },
      tr: { win: ['Ctrl', 'Shift', '↓'], mac: ['Cmd', 'Shift', '↓'] },
    },
    description: { en: 'Extend selection to end of paragraph.', tr: 'Seçimi paragrafın sonuna kadar genişlet.' },
  },
  {
    id: 'word-select-to-beginning',
    app: 'word',
    action: { en: 'Select to Beginning', tr: 'Başlangıca Kadar Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'Home'], mac: ['Cmd', 'Shift', 'Home'] },
      tr: { win: ['Ctrl', 'Shift', 'Home'], mac: ['Cmd', 'Shift', 'Home'] },
    },
    description: { en: 'Select from cursor to beginning of document.', tr: 'İmleçten belgenin başına kadar seç.' },
  },
  {
    id: 'word-select-to-end',
    app: 'word',
    action: { en: 'Select to End', tr: 'Sona Kadar Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'End'], mac: ['Cmd', 'Shift', 'End'] },
      tr: { win: ['Ctrl', 'Shift', 'End'], mac: ['Cmd', 'Shift', 'End'] },
    },
    description: { en: 'Select from cursor to end of document.', tr: 'İmleçten belgenin sonuna kadar seç.' },
  },

  // ============================================
  // INSERT (Ekle)
  // ============================================
  {
    id: 'word-insert-hyperlink',
    app: 'word',
    action: { en: 'Insert Hyperlink', tr: 'Köprü Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] },
      tr: { win: ['Ctrl', 'Alt', 'K'], mac: ['Cmd', 'K'] }, // Türkçe'de Ctrl+K kalın için kullanılıyor
    },
    description: { en: 'Insert a hyperlink.', tr: 'Köprü ekle.' },
  },
  {
    id: 'word-insert-page-break',
    app: 'word',
    action: { en: 'Insert Page Break', tr: 'Sayfa Sonu Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'Enter'], mac: ['Cmd', 'Enter'] },
      tr: { win: ['Ctrl', 'Enter'], mac: ['Cmd', 'Enter'] },
    },
    description: { en: 'Insert a page break.', tr: 'Sayfa sonu ekle.' },
  },
  {
    id: 'word-insert-line-break',
    app: 'word',
    action: { en: 'Insert Line Break', tr: 'Satır Sonu Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Shift', 'Enter'], mac: ['Shift', 'Enter'] },
      tr: { win: ['Shift', 'Enter'], mac: ['Shift', 'Enter'] },
    },
    description: { en: 'Insert a line break.', tr: 'Satır sonu ekle.' },
  },
  {
    id: 'word-insert-date',
    app: 'word',
    action: { en: 'Insert Date', tr: 'Tarih Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'Shift', 'D'], mac: ['Ctrl', 'Shift', 'D'] },
      tr: { win: ['Alt', 'Shift', 'D'], mac: ['Ctrl', 'Shift', 'D'] },
    },
    description: { en: 'Insert current date.', tr: 'Güncel tarihi ekle.' },
  },
  {
    id: 'word-insert-time',
    app: 'word',
    action: { en: 'Insert Time', tr: 'Saat Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'Shift', 'T'], mac: ['Ctrl', 'Shift', 'T'] },
      tr: { win: ['Alt', 'Shift', 'T'], mac: ['Ctrl', 'Shift', 'T'] },
    },
    description: { en: 'Insert current time.', tr: 'Güncel saati ekle.' },
  },
  {
    id: 'word-insert-comment',
    app: 'word',
    action: { en: 'Insert Comment', tr: 'Açıklama Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'Alt', 'M'], mac: ['Cmd', 'Option', 'A'] },
      tr: { win: ['Ctrl', 'Alt', 'M'], mac: ['Cmd', 'Option', 'A'] },
    },
    description: { en: 'Insert a comment.', tr: 'Açıklama ekle.' },
  },
  {
    id: 'word-insert-footnote',
    app: 'word',
    action: { en: 'Insert Footnote', tr: 'Dipnot Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'Ctrl', 'F'], mac: ['Cmd', 'Option', 'F'] },
      tr: { win: ['Alt', 'Ctrl', 'F'], mac: ['Cmd', 'Option', 'F'] },
    },
    description: { en: 'Insert a footnote.', tr: 'Dipnot ekle.' },
  },
  {
    id: 'word-insert-endnote',
    app: 'word',
    action: { en: 'Insert Endnote', tr: 'Son Not Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'Ctrl', 'D'], mac: ['Cmd', 'Option', 'E'] },
      tr: { win: ['Alt', 'Ctrl', 'D'], mac: ['Cmd', 'Option', 'E'] },
    },
    description: { en: 'Insert an endnote.', tr: 'Son not ekle.' },
  },

  // ============================================
  // VIEW (Görünüm)
  // ============================================
  {
    id: 'word-zoom-in',
    app: 'word',
    action: { en: 'Zoom In', tr: 'Yakınlaştır' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
      tr: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
    },
    description: { en: 'Zoom in on document.', tr: 'Belgeyi yakınlaştır.' },
  },
  {
    id: 'word-zoom-out',
    app: 'word',
    action: { en: 'Zoom Out', tr: 'Uzaklaştır' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
      tr: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
    },
    description: { en: 'Zoom out on document.', tr: 'Belgeyi uzaklaştır.' },
  },
  {
    id: 'word-show-hide-ruler',
    app: 'word',
    action: { en: 'Show/Hide Ruler', tr: 'Cetveli Göster/Gizle' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'W', 'R'], mac: ['Alt', 'W', 'R'] },
      tr: { win: ['Alt', 'W', 'R'], mac: ['Alt', 'W', 'R'] },
    },
    description: { en: 'Toggle ruler visibility.', tr: 'Cetvel görünürlüğünü değiştir.' },
  },
  {
    id: 'word-split-window',
    app: 'word',
    action: { en: 'Split Window', tr: 'Pencereyi Böl' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'Ctrl', 'S'], mac: ['Cmd', 'Option', 'S'] },
      tr: { win: ['Alt', 'Ctrl', 'S'], mac: ['Cmd', 'Option', 'S'] },
    },
    description: { en: 'Split the document window.', tr: 'Belge penceresini böl.' },
  },
  {
    id: 'word-navigation-pane',
    app: 'word',
    action: { en: 'Navigation Pane', tr: 'Gezinti Bölmesi' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
      tr: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
    },
    description: { en: 'Open navigation pane.', tr: 'Gezinti bölmesini aç.' },
  },

  // ============================================
  // REVIEW (Gözden Geçir)
  // ============================================
  {
    id: 'word-spelling-check',
    app: 'word',
    action: { en: 'Spelling & Grammar', tr: 'Yazım ve Dilbilgisi' },
    category: 'Text',
    keys: {
      en: { win: ['F7'], mac: ['F7'] },
      tr: { win: ['F7'], mac: ['F7'] },
    },
    description: { en: 'Run spelling and grammar check.', tr: 'Yazım ve dilbilgisi denetimini çalıştır.' },
  },
  {
    id: 'word-thesaurus',
    app: 'word',
    action: { en: 'Thesaurus', tr: 'Eş Anlamlılar Sözlüğü' },
    category: 'Text',
    keys: {
      en: { win: ['Shift', 'F7'], mac: ['Fn', 'Shift', 'F7'] },
      tr: { win: ['Shift', 'F7'], mac: ['Fn', 'Shift', 'F7'] },
    },
    description: { en: 'Open thesaurus.', tr: 'Eş anlamlılar sözlüğünü aç.' },
  },
  {
    id: 'word-word-count',
    app: 'word',
    action: { en: 'Word Count', tr: 'Kelime Sayısı' },
    category: 'Text',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'G'], mac: ['Cmd', 'Shift', 'G'] },
      tr: { win: ['Ctrl', 'Shift', 'G'], mac: ['Cmd', 'Shift', 'G'] },
    },
    description: { en: 'Display word count.', tr: 'Kelime sayısını göster.' },
  },
  {
    id: 'word-track-changes',
    app: 'word',
    action: { en: 'Track Changes', tr: 'Değişiklikleri İzle' },
    category: 'Text',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'E'], mac: ['Cmd', 'Shift', 'E'] },
      tr: { win: ['Ctrl', 'Shift', 'E'], mac: ['Cmd', 'Shift', 'E'] },
    },
    description: { en: 'Toggle track changes.', tr: 'Değişiklikleri izlemeyi aç/kapat.' },
  },

  // ============================================
  // STYLES (Stiller)
  // ============================================
  {
    id: 'word-normal-style',
    app: 'word',
    action: { en: 'Normal Style', tr: 'Normal Stil' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'N'], mac: ['Cmd', 'Shift', 'N'] },
      tr: { win: ['Ctrl', 'Shift', 'N'], mac: ['Cmd', 'Shift', 'N'] },
    },
    description: { en: 'Apply Normal style.', tr: 'Normal stili uygula.' },
  },
  {
    id: 'word-heading1',
    app: 'word',
    action: { en: 'Heading 1', tr: 'Başlık 1' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Alt', '1'], mac: ['Cmd', 'Option', '1'] },
      tr: { win: ['Ctrl', 'Alt', '1'], mac: ['Cmd', 'Option', '1'] },
    },
    description: { en: 'Apply Heading 1 style.', tr: 'Başlık 1 stilini uygula.' },
  },
  {
    id: 'word-heading2',
    app: 'word',
    action: { en: 'Heading 2', tr: 'Başlık 2' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Alt', '2'], mac: ['Cmd', 'Option', '2'] },
      tr: { win: ['Ctrl', 'Alt', '2'], mac: ['Cmd', 'Option', '2'] },
    },
    description: { en: 'Apply Heading 2 style.', tr: 'Başlık 2 stilini uygula.' },
  },
  {
    id: 'word-heading3',
    app: 'word',
    action: { en: 'Heading 3', tr: 'Başlık 3' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Alt', '3'], mac: ['Cmd', 'Option', '3'] },
      tr: { win: ['Ctrl', 'Alt', '3'], mac: ['Cmd', 'Option', '3'] },
    },
    description: { en: 'Apply Heading 3 style.', tr: 'Başlık 3 stilini uygula.' },
  },

  // ============================================
  // TABLE (Tablo)
  // ============================================
  {
    id: 'word-insert-table',
    app: 'word',
    action: { en: 'Insert Table', tr: 'Tablo Ekle' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
      tr: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
    },
    description: { en: 'Insert a new table.', tr: 'Yeni tablo ekle.' },
  },
  {
    id: 'word-next-cell',
    app: 'word',
    action: { en: 'Next Cell', tr: 'Sonraki Hücre' },
    category: 'Data',
    keys: {
      en: { win: ['Tab'], mac: ['Tab'] },
      tr: { win: ['Tab'], mac: ['Tab'] },
    },
    description: { en: 'Move to next cell in table.', tr: 'Tabloda sonraki hücreye git.' },
  },
  {
    id: 'word-previous-cell',
    app: 'word',
    action: { en: 'Previous Cell', tr: 'Önceki Hücre' },
    category: 'Data',
    keys: {
      en: { win: ['Shift', 'Tab'], mac: ['Shift', 'Tab'] },
      tr: { win: ['Shift', 'Tab'], mac: ['Shift', 'Tab'] },
    },
    description: { en: 'Move to previous cell in table.', tr: 'Tabloda önceki hücreye git.' },
  },
  {
    id: 'word-select-table',
    app: 'word',
    action: { en: 'Select Table', tr: 'Tabloyu Seç' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'Num5'], mac: ['Option', '5'] },
      tr: { win: ['Alt', 'Num5'], mac: ['Option', '5'] },
    },
    description: { en: 'Select entire table.', tr: 'Tüm tabloyu seç.' },
  },
];

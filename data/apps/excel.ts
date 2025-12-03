import { Shortcut } from '@/types';

export const excelShortcuts: Shortcut[] = [
  // ============================================
  // FILE (Dosya)
  // ============================================
  {
    id: 'excel-new-workbook',
    app: 'excel',
    action: { en: 'New Workbook', tr: 'Yeni Çalışma Kitabı' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
      tr: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
    },
    description: { en: 'Create a new blank workbook.', tr: 'Yeni boş çalışma kitabı oluştur.' },
  },
  {
    id: 'excel-open-file',
    app: 'excel',
    action: { en: 'Open File', tr: 'Dosya Aç' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
      tr: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
    },
    description: { en: 'Open an existing workbook.', tr: 'Mevcut çalışma kitabını aç.' },
  },
  {
    id: 'excel-save',
    app: 'excel',
    action: { en: 'Save', tr: 'Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
      tr: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
    },
    description: { en: 'Save the current workbook.', tr: 'Mevcut çalışma kitabını kaydet.' },
  },
  {
    id: 'excel-save-as',
    app: 'excel',
    action: { en: 'Save As', tr: 'Farklı Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
      tr: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
    },
    description: { en: 'Save workbook with a new name.', tr: 'Çalışma kitabını yeni isimle kaydet.' },
  },
  {
    id: 'excel-print',
    app: 'excel',
    action: { en: 'Print', tr: 'Yazdır' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
      tr: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
    },
    description: { en: 'Open print dialog.', tr: 'Yazdırma penceresini aç.' },
  },
  {
    id: 'excel-close-workbook',
    app: 'excel',
    action: { en: 'Close Workbook', tr: 'Çalışma Kitabını Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
      tr: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
    },
    description: { en: 'Close the current workbook.', tr: 'Mevcut çalışma kitabını kapat.' },
  },

  // ============================================
  // NAVIGATION (Gezinme)
  // ============================================
  {
    id: 'excel-go-to-cell',
    app: 'excel',
    action: { en: 'Go To Cell', tr: 'Hücreye Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'G'], mac: ['Fn', 'F5'] },
      tr: { win: ['Ctrl', 'G'], mac: ['Fn', 'F5'] },
    },
    description: { en: 'Open Go To dialog to jump to a specific cell.', tr: 'Belirli bir hücreye gitmek için Git penceresini aç.' },
  },
  {
    id: 'excel-move-to-start',
    app: 'excel',
    action: { en: 'Go to Beginning', tr: 'Başlangıca Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Home'], mac: ['Fn', 'Ctrl', '←'] },
      tr: { win: ['Ctrl', 'Home'], mac: ['Fn', 'Ctrl', '←'] },
    },
    description: { en: 'Move to cell A1.', tr: 'A1 hücresine git.' },
  },
  {
    id: 'excel-move-to-end',
    app: 'excel',
    action: { en: 'Go to Last Cell', tr: 'Son Hücreye Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'End'], mac: ['Fn', 'Ctrl', '→'] },
      tr: { win: ['Ctrl', 'End'], mac: ['Fn', 'Ctrl', '→'] },
    },
    description: { en: 'Move to the last used cell.', tr: 'Son kullanılan hücreye git.' },
  },
  {
    id: 'excel-next-sheet',
    app: 'excel',
    action: { en: 'Next Worksheet', tr: 'Sonraki Sayfa' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Page Down'], mac: ['Fn', 'Ctrl', '↓'] },
      tr: { win: ['Ctrl', 'Page Down'], mac: ['Fn', 'Ctrl', '↓'] },
    },
    description: { en: 'Move to the next worksheet.', tr: 'Sonraki çalışma sayfasına git.' },
  },
  {
    id: 'excel-prev-sheet',
    app: 'excel',
    action: { en: 'Previous Worksheet', tr: 'Önceki Sayfa' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Page Up'], mac: ['Fn', 'Ctrl', '↑'] },
      tr: { win: ['Ctrl', 'Page Up'], mac: ['Fn', 'Ctrl', '↑'] },
    },
    description: { en: 'Move to the previous worksheet.', tr: 'Önceki çalışma sayfasına git.' },
  },

  // ============================================
  // EDITING (Düzenleme)
  // ============================================
  {
    id: 'excel-cut',
    app: 'excel',
    action: { en: 'Cut', tr: 'Kes' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
      tr: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
    },
    description: { en: 'Cut selected cells.', tr: 'Seçili hücreleri kes.' },
  },
  {
    id: 'excel-copy',
    app: 'excel',
    action: { en: 'Copy', tr: 'Kopyala' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
      tr: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
    },
    description: { en: 'Copy selected cells.', tr: 'Seçili hücreleri kopyala.' },
  },
  {
    id: 'excel-paste',
    app: 'excel',
    action: { en: 'Paste', tr: 'Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
      tr: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
    },
    description: { en: 'Paste clipboard content.', tr: 'Pano içeriğini yapıştır.' },
  },
  {
    id: 'excel-undo',
    app: 'excel',
    action: { en: 'Undo', tr: 'Geri Al' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
      tr: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
    },
    description: { en: 'Undo the last action.', tr: 'Son işlemi geri al.' },
  },
  {
    id: 'excel-redo',
    app: 'excel',
    action: { en: 'Redo', tr: 'Yinele' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
      tr: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
    },
    description: { en: 'Redo the last undone action.', tr: 'Son geri alınan işlemi yinele.' },
  },
  {
    id: 'excel-find',
    app: 'excel',
    action: { en: 'Find', tr: 'Bul' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
      tr: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
    },
    description: { en: 'Open Find dialog.', tr: 'Bul penceresini aç.' },
  },
  {
    id: 'excel-replace',
    app: 'excel',
    action: { en: 'Find & Replace', tr: 'Bul ve Değiştir' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
      tr: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
    },
    description: { en: 'Open Find and Replace dialog.', tr: 'Bul ve Değiştir penceresini aç.' },
  },
  {
    id: 'excel-edit-cell',
    app: 'excel',
    action: { en: 'Edit Cell', tr: 'Hücreyi Düzenle' },
    category: 'Editing',
    keys: {
      en: { win: ['F2'], mac: ['F2'] },
      tr: { win: ['F2'], mac: ['F2'] },
    },
    description: { en: 'Edit the active cell.', tr: 'Aktif hücreyi düzenle.' },
  },
  {
    id: 'excel-fill-down',
    app: 'excel',
    action: { en: 'Fill Down', tr: 'Aşağı Doldur' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
      tr: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
    },
    description: { en: 'Fill down from the cell above.', tr: 'Üstteki hücreden aşağı doldur.' },
  },

  // ============================================
  // GENERAL (Biçimlendirme)
  // ============================================
  {
    id: 'excel-bold',
    app: 'excel',
    action: { en: 'Bold', tr: 'Kalın' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'B'], mac: ['Cmd', 'B'] },
      tr: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] }, // Türkçe Excel'de Ctrl+K = Kalın
    },
    description: { en: 'Apply bold formatting.', tr: 'Kalın biçimlendirme uygula.' },
  },
  {
    id: 'excel-italic',
    app: 'excel',
    action: { en: 'Italic', tr: 'İtalik' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
      tr: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
    },
    description: { en: 'Apply italic formatting.', tr: 'İtalik biçimlendirme uygula.' },
  },
  {
    id: 'excel-underline',
    app: 'excel',
    action: { en: 'Underline', tr: 'Altı Çizili' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'U'], mac: ['Cmd', 'U'] },
      tr: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] }, // Türkçe Excel'de Ctrl+A = Altı çizili
    },
    description: { en: 'Apply underline formatting.', tr: 'Altı çizili biçimlendirme uygula.' },
  },
  {
    id: 'excel-format-cells',
    app: 'excel',
    action: { en: 'Format Cells', tr: 'Hücreleri Biçimlendir' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', '1'], mac: ['Cmd', '1'] },
      tr: { win: ['Ctrl', '1'], mac: ['Cmd', '1'] },
    },
    description: { en: 'Open Format Cells dialog.', tr: 'Hücreleri Biçimlendir penceresini aç.' },
  },
  {
    id: 'excel-select-all',
    app: 'excel',
    action: { en: 'Select All', tr: 'Tümünü Seç' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] },
      tr: { win: ['Ctrl', 'Shift', 'Space'], mac: ['Cmd', 'Shift', 'Space'] }, // Türkçe'de Ctrl+A altı çizili
    },
    description: { en: 'Select entire worksheet.', tr: 'Tüm çalışma sayfasını seç.' },
  },
  {
    id: 'excel-sum-formula',
    app: 'excel',
    action: { en: 'AutoSum', tr: 'Otomatik Toplam' },
    category: 'General',
    keys: {
      en: { win: ['Alt', '='], mac: ['Cmd', 'Shift', 'T'] },
      tr: { win: ['Alt', '='], mac: ['Cmd', 'Shift', 'T'] },
    },
    description: { en: 'Insert SUM formula.', tr: 'TOPLA formülü ekle.' },
  },
  {
    id: 'excel-create-table',
    app: 'excel',
    action: { en: 'Create Table', tr: 'Tablo Oluştur' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
      tr: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
    },
    description: { en: 'Create a table from selected data.', tr: 'Seçili veriden tablo oluştur.' },
  },
  {
    id: 'excel-insert-hyperlink',
    app: 'excel',
    action: { en: 'Insert Hyperlink', tr: 'Köprü Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] },
      tr: { win: ['Ctrl', 'Alt', 'K'], mac: ['Cmd', 'K'] }, // Türkçe'de Ctrl+K kalın için kullanılıyor
    },
    description: { en: 'Insert a hyperlink.', tr: 'Köprü ekle.' },
  },

  // ============================================
  // VIEW (Görünüm)
  // ============================================
  {
    id: 'excel-show-formulas',
    app: 'excel',
    action: { en: 'Show Formulas', tr: 'Formülleri Göster' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', '`'], mac: ['Ctrl', '`'] },
      tr: { win: ['Ctrl', '`'], mac: ['Ctrl', '`'] },
    },
    description: { en: 'Toggle between showing formulas and values.', tr: 'Formüller ve değerler arasında geçiş yap.' },
  },

  // ============================================
  // FILE MANAGEMENT (Dosya Yönetimi) - EK
  // ============================================
  {
    id: 'excel-close-app',
    app: 'excel',
    action: { en: 'Close Application', tr: 'Uygulamayı Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
      tr: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
    },
    description: { en: 'Close Excel application.', tr: 'Excel uygulamasını kapat.' },
  },
  {
    id: 'excel-add-new-sheet',
    app: 'excel',
    action: { en: 'Add New Sheet', tr: 'Yeni Sayfa Ekle' },
    category: 'File',
    keys: {
      en: { win: ['Shift', 'Alt', 'F1'], mac: ['Shift', 'Fn', 'F11'] },
      tr: { win: ['Shift', 'Alt', 'F1'], mac: ['Shift', 'Fn', 'F11'] },
    },
    description: { en: 'Insert a new worksheet.', tr: 'Yeni çalışma sayfası ekle.' },
  },
  {
    id: 'excel-rename-sheet',
    app: 'excel',
    action: { en: 'Rename Active Sheet', tr: 'Aktif Sayfayı Yeniden Adlandır' },
    category: 'File',
    keys: {
      en: { win: ['Alt', 'H', 'O', 'R'], mac: ['Alt', 'H', 'O', 'R'] },
      tr: { win: ['Alt', 'H', 'O', 'R'], mac: ['Alt', 'H', 'O', 'R'] },
    },
    description: { en: 'Rename the active worksheet.', tr: 'Aktif çalışma sayfasını yeniden adlandır.' },
  },
  {
    id: 'excel-delete-sheet',
    app: 'excel',
    action: { en: 'Delete Active Sheet', tr: 'Aktif Sayfayı Sil' },
    category: 'File',
    keys: {
      en: { win: ['Alt', 'H', 'D', 'S'], mac: ['Alt', 'H', 'D', 'S'] },
      tr: { win: ['Alt', 'H', 'D', 'S'], mac: ['Alt', 'H', 'D', 'S'] },
    },
    description: { en: 'Delete the active worksheet.', tr: 'Aktif çalışma sayfasını sil.' },
  },

  // ============================================
  // COPY AND PASTE (Kopyala ve Yapıştır) - EK
  // ============================================
  {
    id: 'excel-paste-right',
    app: 'excel',
    action: { en: 'Paste to the Right', tr: 'Sağa Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
      tr: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
    },
    description: { en: 'Fill right from the cell to the left.', tr: 'Soldaki hücreden sağa doldur.' },
  },
  {
    id: 'excel-duplicate',
    app: 'excel',
    action: { en: 'Duplicate', tr: 'Çoğalt' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
      tr: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
    },
    description: { en: 'Duplicate selection down.', tr: 'Seçimi aşağı çoğalt.' },
  },
  {
    id: 'excel-paste-as-formula',
    app: 'excel',
    action: { en: 'Paste as Formula', tr: 'Formül Olarak Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Alt', 'H', 'V', 'F'], mac: ['Alt', 'H', 'V', 'F'] },
      tr: { win: ['Alt', 'H', 'V', 'F'], mac: ['Alt', 'H', 'V', 'F'] },
    },
    description: { en: 'Paste only the formulas.', tr: 'Sadece formülleri yapıştır.' },
  },
  {
    id: 'excel-paste-as-value',
    app: 'excel',
    action: { en: 'Paste as Value', tr: 'Değer Olarak Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Alt', 'H', 'V', 'V'], mac: ['Alt', 'H', 'V', 'V'] },
      tr: { win: ['Alt', 'H', 'V', 'V'], mac: ['Alt', 'H', 'V', 'V'] },
    },
    description: { en: 'Paste only the values.', tr: 'Sadece değerleri yapıştır.' },
  },
  {
    id: 'excel-delete-selection',
    app: 'excel',
    action: { en: 'Delete Selection', tr: 'Seçimi Sil' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
      tr: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
    },
    description: { en: 'Delete selected cells/rows/columns.', tr: 'Seçili hücre/satır/sütunları sil.' },
  },
  {
    id: 'excel-insert-cells',
    app: 'excel',
    action: { en: 'Insert Cells/Rows/Columns', tr: 'Hücre/Satır/Sütun Ekle' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
      tr: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
    },
    description: { en: 'Insert cells, rows, or columns.', tr: 'Hücre, satır veya sütun ekle.' },
  },

  // ============================================
  // CANCEL AND REPEAT (İptal ve Tekrar)
  // ============================================
  {
    id: 'excel-repeat-last-action',
    app: 'excel',
    action: { en: 'Repeat Last Action', tr: 'Son İşlemi Tekrarla' },
    category: 'Editing',
    keys: {
      en: { win: ['F4'], mac: ['Cmd', 'Y'] },
      tr: { win: ['F4'], mac: ['Cmd', 'Y'] },
    },
    description: { en: 'Repeat the last action.', tr: 'Son işlemi tekrarla.' },
  },

  // ============================================
  // DATE AND TIME (Tarih ve Saat)
  // ============================================
  {
    id: 'excel-insert-date',
    app: 'excel',
    action: { en: 'Insert Current Date', tr: 'Güncel Tarihi Ekle' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', ';'], mac: ['Ctrl', ';'] },
      tr: { win: ['Ctrl', ';'], mac: ['Ctrl', ';'] },
    },
    description: { en: 'Insert current date in active cell.', tr: 'Aktif hücreye güncel tarihi ekle.' },
  },
  {
    id: 'excel-insert-time',
    app: 'excel',
    action: { en: 'Insert Current Time', tr: 'Güncel Saati Ekle' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Shift', ';'], mac: ['Cmd', ';'] },
      tr: { win: ['Ctrl', 'Shift', ';'], mac: ['Cmd', ';'] },
    },
    description: { en: 'Insert current time in active cell.', tr: 'Aktif hücreye güncel saati ekle.' },
  },

  // ============================================
  // FORMATTING (Biçimlendirme) - EK
  // ============================================
  {
    id: 'excel-remove-fill-color',
    app: 'excel',
    action: { en: 'Remove Fill Color', tr: 'Dolgu Rengini Kaldır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'H', 'N'], mac: ['Alt', 'H', 'H', 'N'] },
      tr: { win: ['Alt', 'H', 'H', 'N'], mac: ['Alt', 'H', 'H', 'N'] },
    },
    description: { en: 'Remove cell fill color.', tr: 'Hücre dolgu rengini kaldır.' },
  },
  {
    id: 'excel-remove-borders',
    app: 'excel',
    action: { en: 'Remove Borders', tr: 'Kenarlıkları Kaldır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'B', 'N'], mac: ['Alt', 'H', 'B', 'N'] },
      tr: { win: ['Alt', 'H', 'B', 'N'], mac: ['Alt', 'H', 'B', 'N'] },
    },
    description: { en: 'Remove all borders.', tr: 'Tüm kenarlıkları kaldır.' },
  },
  {
    id: 'excel-add-borders-all',
    app: 'excel',
    action: { en: 'Add Borders (All)', tr: 'Kenarlık Ekle (Tümü)' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'B', 'A'], mac: ['Alt', 'H', 'B', 'A'] },
      tr: { win: ['Alt', 'H', 'B', 'A'], mac: ['Alt', 'H', 'B', 'A'] },
    },
    description: { en: 'Add all borders.', tr: 'Tüm kenarlıkları ekle.' },
  },
  {
    id: 'excel-add-borders-external',
    app: 'excel',
    action: { en: 'Add Borders (External)', tr: 'Kenarlık Ekle (Dış)' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'B', 'S'], mac: ['Alt', 'H', 'B', 'S'] },
      tr: { win: ['Alt', 'H', 'B', 'S'], mac: ['Alt', 'H', 'B', 'S'] },
    },
    description: { en: 'Add external borders.', tr: 'Dış kenarlık ekle.' },
  },
  {
    id: 'excel-add-borders-thick',
    app: 'excel',
    action: { en: 'Add Borders (Thick)', tr: 'Kenarlık Ekle (Kalın)' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'B', 'T'], mac: ['Alt', 'H', 'B', 'T'] },
      tr: { win: ['Alt', 'H', 'B', 'T'], mac: ['Alt', 'H', 'B', 'T'] },
    },
    description: { en: 'Add thick borders.', tr: 'Kalın kenarlık ekle.' },
  },
  {
    id: 'excel-format-percentage',
    app: 'excel',
    action: { en: 'Format as Percentage', tr: 'Yüzde Olarak Biçimlendir' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '%'], mac: ['Ctrl', 'Shift', '%'] },
      tr: { win: ['Ctrl', 'Shift', '%'], mac: ['Ctrl', 'Shift', '%'] },
    },
    description: { en: 'Apply percentage format.', tr: 'Yüzde biçimini uygula.' },
  },
  {
    id: 'excel-open-format-dialog',
    app: 'excel',
    action: { en: 'Open Format Dialog Box', tr: 'Biçim İletişim Kutusunu Aç' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'F'], mac: ['Cmd', 'Shift', 'F'] },
      tr: { win: ['Ctrl', 'Shift', 'F'], mac: ['Cmd', 'Shift', 'F'] },
    },
    description: { en: 'Open the format dialog box.', tr: 'Biçim iletişim kutusunu aç.' },
  },
  {
    id: 'excel-autofit-columns',
    app: 'excel',
    action: { en: 'Autofit Columns', tr: 'Sütunları Otomatik Sığdır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'O', 'I'], mac: ['Alt', 'H', 'O', 'I'] },
      tr: { win: ['Alt', 'H', 'O', 'I'], mac: ['Alt', 'H', 'O', 'I'] },
    },
    description: { en: 'Auto-fit column width.', tr: 'Sütun genişliğini otomatik ayarla.' },
  },
  {
    id: 'excel-autofit-rows',
    app: 'excel',
    action: { en: 'Autofit Rows', tr: 'Satırları Otomatik Sığdır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Alt', 'H', 'O', 'A'], mac: ['Alt', 'H', 'O', 'A'] },
      tr: { win: ['Alt', 'H', 'O', 'A'], mac: ['Alt', 'H', 'O', 'A'] },
    },
    description: { en: 'Auto-fit row height.', tr: 'Satır yüksekliğini otomatik ayarla.' },
  },

  // ============================================
  // SELECTION (Seçim)
  // ============================================
  {
    id: 'excel-go-to-end-of-range',
    app: 'excel',
    action: { en: 'Go to End of Range', tr: 'Aralığın Sonuna Git' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Arrow'], mac: ['Cmd', 'Arrow'] },
      tr: { win: ['Ctrl', 'Arrow'], mac: ['Cmd', 'Arrow'] },
    },
    description: { en: 'Jump to the edge of data region.', tr: 'Veri bölgesinin kenarına atla.' },
  },
  {
    id: 'excel-add-cell-to-selection',
    app: 'excel',
    action: { en: 'Add 1 Cell to Selection', tr: 'Seçime 1 Hücre Ekle' },
    category: 'Selection',
    keys: {
      en: { win: ['Shift', 'Arrow'], mac: ['Shift', 'Arrow'] },
      tr: { win: ['Shift', 'Arrow'], mac: ['Shift', 'Arrow'] },
    },
    description: { en: 'Extend selection by one cell.', tr: 'Seçimi bir hücre genişlet.' },
  },
  {
    id: 'excel-add-range-to-selection',
    app: 'excel',
    action: { en: 'Add 1 Range to Selection', tr: 'Seçime 1 Aralık Ekle' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'Arrow'], mac: ['Cmd', 'Shift', 'Arrow'] },
      tr: { win: ['Ctrl', 'Shift', 'Arrow'], mac: ['Cmd', 'Shift', 'Arrow'] },
    },
    description: { en: 'Extend selection to the edge of data region.', tr: 'Seçimi veri bölgesinin kenarına kadar genişlet.' },
  },
  {
    id: 'excel-move-item-updown',
    app: 'excel',
    action: { en: 'Move Item Up/Down', tr: 'Öğeyi Yukarı/Aşağı Taşı' },
    category: 'Selection',
    keys: {
      en: { win: ['Alt', 'Shift', 'Arrow'], mac: ['Alt', 'Shift', 'Arrow'] },
      tr: { win: ['Alt', 'Shift', 'Arrow'], mac: ['Alt', 'Shift', 'Arrow'] },
    },
    description: { en: 'Move item up or down in bulleted list.', tr: 'Madde işaretli listede öğeyi yukarı/aşağı taşı.' },
  },
  {
    id: 'excel-selection-mode',
    app: 'excel',
    action: { en: 'Activation Selection Mode', tr: 'Seçim Modunu Etkinleştir' },
    category: 'Selection',
    keys: {
      en: { win: ['F8'], mac: ['F8'] },
      tr: { win: ['F8'], mac: ['F8'] },
    },
    description: { en: 'Turn on extend selection mode.', tr: 'Seçimi genişletme modunu aç.' },
  },
  {
    id: 'excel-select-current-row',
    app: 'excel',
    action: { en: 'Select Current Row', tr: 'Mevcut Satırı Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Shift', 'Space'], mac: ['Shift', 'Space'] },
      tr: { win: ['Shift', 'Space'], mac: ['Shift', 'Space'] },
    },
    description: { en: 'Select the entire row.', tr: 'Tüm satırı seç.' },
  },
  {
    id: 'excel-select-current-column',
    app: 'excel',
    action: { en: 'Select Current Column', tr: 'Mevcut Sütunu Seç' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
      tr: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
    },
    description: { en: 'Select the entire column.', tr: 'Tüm sütunu seç.' },
  },
  {
    id: 'excel-hide-active-row',
    app: 'excel',
    action: { en: 'Hide Active Row', tr: 'Aktif Satırı Gizle' },
    category: 'Selection',
    keys: {
      en: { win: ['Ctrl', 'Shift', '9'], mac: ['Cmd', 'Shift', '9'] },
      tr: { win: ['Ctrl', 'Shift', '9'], mac: ['Cmd', 'Shift', '9'] },
    },
    description: { en: 'Hide the selected row.', tr: 'Seçili satırı gizle.' },
  },

  // ============================================
  // FORMULAS (Formüller)
  // ============================================
  {
    id: 'excel-view-named-ranges',
    app: 'excel',
    action: { en: 'View Named Ranges', tr: 'Adlandırılmış Aralıkları Görüntüle' },
    category: 'Formulas',
    keys: {
      en: { win: ['F3'], mac: ['F3'] },
      tr: { win: ['F3'], mac: ['F3'] },
    },
    description: { en: 'View and insert named ranges.', tr: 'Adlandırılmış aralıkları görüntüle ve ekle.' },
  },
  {
    id: 'excel-validate-formula',
    app: 'excel',
    action: { en: 'Validate Suggested Formula', tr: 'Önerilen Formülü Onayla' },
    category: 'Formulas',
    keys: {
      en: { win: ['Tab'], mac: ['Tab'] },
      tr: { win: ['Tab'], mac: ['Tab'] },
    },
    description: { en: 'Accept the suggested formula.', tr: 'Önerilen formülü kabul et.' },
  },
  {
    id: 'excel-line-break-formula',
    app: 'excel',
    action: { en: 'Line Break in Formula', tr: 'Formülde Satır Sonu' },
    category: 'Formulas',
    keys: {
      en: { win: ['Alt', 'Enter'], mac: ['Alt', 'Enter'] },
      tr: { win: ['Alt', 'Enter'], mac: ['Alt', 'Enter'] },
    },
    description: { en: 'Add a line break in formula.', tr: 'Formülde satır sonu ekle.' },
  },
  {
    id: 'excel-expand-formula-bar',
    app: 'excel',
    action: { en: 'Expand Formula Bar', tr: 'Formül Çubuğunu Genişlet' },
    category: 'Formulas',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'U'], mac: ['Ctrl', 'Shift', 'U'] },
      tr: { win: ['Ctrl', 'Shift', 'U'], mac: ['Ctrl', 'Shift', 'U'] },
    },
    description: { en: 'Expand or collapse the formula bar.', tr: 'Formül çubuğunu genişlet veya daralt.' },
  },
  {
    id: 'excel-flash-fill',
    app: 'excel',
    action: { en: 'Flash Fill', tr: 'Hızlı Doldur' },
    category: 'Formulas',
    keys: {
      en: { win: ['Ctrl', 'E'], mac: ['Ctrl', 'E'] },
      tr: { win: ['Ctrl', 'E'], mac: ['Ctrl', 'E'] },
    },
    description: { en: 'Flash fill selected range.', tr: 'Seçili aralığı hızlı doldur.' },
  },

  // ============================================
  // TEXT (Metin)
  // ============================================
  {
    id: 'excel-delete-character',
    app: 'excel',
    action: { en: 'Delete 1 Character', tr: '1 Karakter Sil' },
    category: 'Text',
    keys: {
      en: { win: ['Backspace'], mac: ['Backspace'] },
      tr: { win: ['Backspace'], mac: ['Backspace'] },
    },
    description: { en: 'Delete one character to the left.', tr: 'Soldaki bir karakteri sil.' },
  },
  {
    id: 'excel-delete-word',
    app: 'excel',
    action: { en: 'Delete 1 Word', tr: '1 Kelime Sil' },
    category: 'Text',
    keys: {
      en: { win: ['Ctrl', 'Backspace'], mac: ['Alt', 'Backspace'] },
      tr: { win: ['Ctrl', 'Backspace'], mac: ['Alt', 'Backspace'] },
    },
    description: { en: 'Delete one word to the left.', tr: 'Soldaki bir kelimeyi sil.' },
  },
  {
    id: 'excel-context-menu',
    app: 'excel',
    action: { en: 'Contextual Menu', tr: 'Bağlam Menüsü' },
    category: 'Text',
    keys: {
      en: { win: ['Shift', 'F10'], mac: ['Ctrl', 'Click'] },
      tr: { win: ['Shift', 'F10'], mac: ['Ctrl', 'Click'] },
    },
    description: { en: 'Open right-click context menu.', tr: 'Sağ tık bağlam menüsünü aç.' },
  },
  {
    id: 'excel-spelling-check',
    app: 'excel',
    action: { en: 'Spelling & Grammar Check', tr: 'Yazım ve Dilbilgisi Denetimi' },
    category: 'Text',
    keys: {
      en: { win: ['F7'], mac: ['F7'] },
      tr: { win: ['F7'], mac: ['F7'] },
    },
    description: { en: 'Run spelling and grammar check.', tr: 'Yazım ve dilbilgisi denetimini çalıştır.' },
  },

  // ============================================
  // DATA (Veri)
  // ============================================
  {
    id: 'excel-merge-cells',
    app: 'excel',
    action: { en: 'Merge Cells', tr: 'Hücreleri Birleştir' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'H', 'M', 'C'], mac: ['Alt', 'H', 'M', 'C'] },
      tr: { win: ['Alt', 'H', 'M', 'C'], mac: ['Alt', 'H', 'M', 'C'] },
    },
    description: { en: 'Merge selected cells.', tr: 'Seçili hücreleri birleştir.' },
  },
  {
    id: 'excel-unmerge-cells',
    app: 'excel',
    action: { en: 'Unmerge Cells', tr: 'Hücre Birleştirmeyi Kaldır' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'H', 'M', 'U'], mac: ['Alt', 'H', 'M', 'U'] },
      tr: { win: ['Alt', 'H', 'M', 'U'], mac: ['Alt', 'H', 'M', 'U'] },
    },
    description: { en: 'Unmerge cells.', tr: 'Hücre birleştirmeyi kaldır.' },
  },
  {
    id: 'excel-toggle-filter',
    app: 'excel',
    action: { en: 'Add/Remove Filter', tr: 'Filtre Ekle/Kaldır' },
    category: 'Data',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'L'], mac: ['Cmd', 'Shift', 'L'] },
      tr: { win: ['Ctrl', 'Shift', 'L'], mac: ['Cmd', 'Shift', 'L'] },
    },
    description: { en: 'Toggle filter on/off.', tr: 'Filtreyi aç/kapat.' },
  },
  {
    id: 'excel-show-filter-values',
    app: 'excel',
    action: { en: 'Show Values in Filter', tr: 'Filtredeki Değerleri Göster' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', '↓'], mac: ['Alt', '↓'] },
      tr: { win: ['Alt', '↓'], mac: ['Alt', '↓'] },
    },
    description: { en: 'Show values in a filter or list.', tr: 'Filtre veya listedeki değerleri göster.' },
  },
  {
    id: 'excel-check-uncheck-filter',
    app: 'excel',
    action: { en: 'Check/Uncheck Filter Values', tr: 'Filtre Değerlerini İşaretle/Kaldır' },
    category: 'Data',
    keys: {
      en: { win: ['Space'], mac: ['Space'] },
      tr: { win: ['Space'], mac: ['Space'] },
    },
    description: { en: 'Check or uncheck values in filter list.', tr: 'Filtre listesindeki değerleri işaretle veya kaldır.' },
  },
  {
    id: 'excel-insert-table',
    app: 'excel',
    action: { en: 'Insert Table', tr: 'Tablo Ekle' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
      tr: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
    },
    description: { en: 'Insert a new table.', tr: 'Yeni tablo ekle.' },
  },
  {
    id: 'excel-insert-pivot-table',
    app: 'excel',
    action: { en: 'Insert PivotTable', tr: 'PivotTable Ekle' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'N', 'V'], mac: ['Alt', 'N', 'V'] },
      tr: { win: ['Alt', 'N', 'V'], mac: ['Alt', 'N', 'V'] },
    },
    description: { en: 'Insert a new PivotTable.', tr: 'Yeni PivotTable ekle.' },
  },

  // ============================================
  // WINDOWS (Pencereler)
  // ============================================
  {
    id: 'excel-go-to-desktop',
    app: 'excel',
    action: { en: 'Go to Desktop', tr: 'Masaüstüne Git' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'D'], mac: ['Fn', 'F11'] },
      tr: { win: ['Win', 'D'], mac: ['Fn', 'F11'] },
    },
    description: { en: 'Show desktop.', tr: 'Masaüstünü göster.' },
  },
  {
    id: 'excel-open-computer',
    app: 'excel',
    action: { en: 'Open Computer', tr: 'Bilgisayarı Aç' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'E'], mac: ['Cmd', 'Shift', 'C'] },
      tr: { win: ['Win', 'E'], mac: ['Cmd', 'Shift', 'C'] },
    },
    description: { en: 'Open File Explorer.', tr: 'Dosya Gezgini\'ni aç.' },
  },
  {
    id: 'excel-clipboard-history',
    app: 'excel',
    action: { en: 'Open Clipboard History', tr: 'Pano Geçmişini Aç' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'V'], mac: ['Cmd', 'Shift', 'V'] },
      tr: { win: ['Win', 'V'], mac: ['Cmd', 'Shift', 'V'] },
    },
    description: { en: 'Open clipboard history.', tr: 'Pano geçmişini aç.' },
  },
  {
    id: 'excel-lock-computer',
    app: 'excel',
    action: { en: 'Lock Computer', tr: 'Bilgisayarı Kilitle' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'L'], mac: ['Ctrl', 'Cmd', 'Q'] },
      tr: { win: ['Win', 'L'], mac: ['Ctrl', 'Cmd', 'Q'] },
    },
    description: { en: 'Lock the computer.', tr: 'Bilgisayarı kilitle.' },
  },
  {
    id: 'excel-speech-to-text',
    app: 'excel',
    action: { en: 'Speech-to-Text', tr: 'Konuşmadan Metne' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'H'], mac: ['Fn', 'Fn'] },
      tr: { win: ['Win', 'H'], mac: ['Fn', 'Fn'] },
    },
    description: { en: 'Launch speech-to-text.', tr: 'Konuşmadan metne özelliğini başlat.' },
  },
  {
    id: 'excel-display-options',
    app: 'excel',
    action: { en: 'Screen Display Options', tr: 'Ekran Görüntüleme Seçenekleri' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'P'], mac: ['Cmd', 'F1'] },
      tr: { win: ['Win', 'P'], mac: ['Cmd', 'F1'] },
    },
    description: { en: 'Show screen display options.', tr: 'Ekran görüntüleme seçeneklerini göster.' },
  },
  {
    id: 'excel-screen-clipping',
    app: 'excel',
    action: { en: 'Screen Clipping', tr: 'Ekran Alıntısı' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'Shift', 'S'], mac: ['Cmd', 'Shift', '4'] },
      tr: { win: ['Win', 'Shift', 'S'], mac: ['Cmd', 'Shift', '4'] },
    },
    description: { en: 'Capture screen clipping.', tr: 'Ekran alıntısı al.' },
  },
  {
    id: 'excel-move-window-corner',
    app: 'excel',
    action: { en: 'Move Window to Corner', tr: 'Pencereyi Köşeye Taşı' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', 'Arrow'], mac: ['Ctrl', 'Cmd', 'Arrow'] },
      tr: { win: ['Win', 'Arrow'], mac: ['Ctrl', 'Cmd', 'Arrow'] },
    },
    description: { en: 'Move window to screen corner.', tr: 'Pencereyi ekran köşesine taşı.' },
  },
  {
    id: 'excel-insert-emoji',
    app: 'excel',
    action: { en: 'Insert Emoji', tr: 'Emoji Ekle' },
    category: 'Windows',
    keys: {
      en: { win: ['Win', '.'], mac: ['Ctrl', 'Cmd', 'Space'] },
      tr: { win: ['Win', '.'], mac: ['Ctrl', 'Cmd', 'Space'] },
    },
    description: { en: 'Open emoji picker.', tr: 'Emoji seçiciyi aç.' },
  },
  {
    id: 'excel-new-tab',
    app: 'excel',
    action: { en: 'Open New Tab', tr: 'Yeni Sekme Aç' },
    category: 'Windows',
    keys: {
      en: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
      tr: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
    },
    description: { en: 'Open new tab.', tr: 'Yeni sekme aç.' },
  },
  {
    id: 'excel-close-tab',
    app: 'excel',
    action: { en: 'Close Current Tab', tr: 'Mevcut Sekmeyi Kapat' },
    category: 'Windows',
    keys: {
      en: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
      tr: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
    },
    description: { en: 'Close current tab.', tr: 'Mevcut sekmeyi kapat.' },
  },
  {
    id: 'excel-restore-closed-tab',
    app: 'excel',
    action: { en: 'Restore Last Closed Tab', tr: 'Son Kapatılan Sekmeyi Geri Yükle' },
    category: 'Windows',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'T'], mac: ['Cmd', 'Shift', 'T'] },
      tr: { win: ['Ctrl', 'Shift', 'T'], mac: ['Cmd', 'Shift', 'T'] },
    },
    description: { en: 'Restore last closed tab.', tr: 'Son kapatılan sekmeyi geri yükle.' },
  },
  {
    id: 'excel-fullscreen',
    app: 'excel',
    action: { en: 'Full Screen ON/OFF', tr: 'Tam Ekran Aç/Kapat' },
    category: 'Windows',
    keys: {
      en: { win: ['F11'], mac: ['Ctrl', 'Cmd', 'F'] },
      tr: { win: ['F11'], mac: ['Ctrl', 'Cmd', 'F'] },
    },
    description: { en: 'Toggle full screen mode.', tr: 'Tam ekran modunu aç/kapat.' },
  },
];

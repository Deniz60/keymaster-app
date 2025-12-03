import { Shortcut } from '@/types';

export const powerpointShortcuts: Shortcut[] = [
  // ============================================
  // FILE (Dosya)
  // ============================================
  {
    id: 'ppt-new-presentation',
    app: 'powerpoint',
    action: { en: 'New Presentation', tr: 'Yeni Sunu' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
      tr: { win: ['Ctrl', 'N'], mac: ['Cmd', 'N'] },
    },
    description: { en: 'Create a new blank presentation.', tr: 'Yeni boş sunu oluştur.' },
  },
  {
    id: 'ppt-open-file',
    app: 'powerpoint',
    action: { en: 'Open File', tr: 'Dosya Aç' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
      tr: { win: ['Ctrl', 'O'], mac: ['Cmd', 'O'] },
    },
    description: { en: 'Open an existing presentation.', tr: 'Mevcut sunuyu aç.' },
  },
  {
    id: 'ppt-save',
    app: 'powerpoint',
    action: { en: 'Save', tr: 'Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
      tr: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
    },
    description: { en: 'Save the current presentation.', tr: 'Mevcut sunuyu kaydet.' },
  },
  {
    id: 'ppt-save-as',
    app: 'powerpoint',
    action: { en: 'Save As', tr: 'Farklı Kaydet' },
    category: 'File',
    keys: {
      en: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
      tr: { win: ['F12'], mac: ['Cmd', 'Shift', 'S'] },
    },
    description: { en: 'Save presentation with a new name.', tr: 'Sunuyu yeni isimle kaydet.' },
  },
  {
    id: 'ppt-print',
    app: 'powerpoint',
    action: { en: 'Print', tr: 'Yazdır' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
      tr: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
    },
    description: { en: 'Open print dialog.', tr: 'Yazdırma penceresini aç.' },
  },
  {
    id: 'ppt-close',
    app: 'powerpoint',
    action: { en: 'Close Presentation', tr: 'Sunuyu Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
      tr: { win: ['Ctrl', 'W'], mac: ['Cmd', 'W'] },
    },
    description: { en: 'Close the current presentation.', tr: 'Mevcut sunuyu kapat.' },
  },
  {
    id: 'ppt-close-app',
    app: 'powerpoint',
    action: { en: 'Close Application', tr: 'Uygulamayı Kapat' },
    category: 'File',
    keys: {
      en: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
      tr: { win: ['Alt', 'F4'], mac: ['Cmd', 'Q'] },
    },
    description: { en: 'Close PowerPoint application.', tr: 'PowerPoint uygulamasını kapat.' },
  },

  // ============================================
  // EDITING (Düzenleme)
  // ============================================
  {
    id: 'ppt-cut',
    app: 'powerpoint',
    action: { en: 'Cut', tr: 'Kes' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
      tr: { win: ['Ctrl', 'X'], mac: ['Cmd', 'X'] },
    },
    description: { en: 'Cut selected object.', tr: 'Seçili nesneyi kes.' },
  },
  {
    id: 'ppt-copy',
    app: 'powerpoint',
    action: { en: 'Copy', tr: 'Kopyala' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
      tr: { win: ['Ctrl', 'C'], mac: ['Cmd', 'C'] },
    },
    description: { en: 'Copy selected object.', tr: 'Seçili nesneyi kopyala.' },
  },
  {
    id: 'ppt-paste',
    app: 'powerpoint',
    action: { en: 'Paste', tr: 'Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
      tr: { win: ['Ctrl', 'V'], mac: ['Cmd', 'V'] },
    },
    description: { en: 'Paste clipboard content.', tr: 'Pano içeriğini yapıştır.' },
  },
  {
    id: 'ppt-paste-special',
    app: 'powerpoint',
    action: { en: 'Paste Special', tr: 'Özel Yapıştır' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Alt', 'V'], mac: ['Cmd', 'Ctrl', 'V'] },
      tr: { win: ['Ctrl', 'Alt', 'V'], mac: ['Cmd', 'Ctrl', 'V'] },
    },
    description: { en: 'Open paste special dialog.', tr: 'Özel yapıştır penceresini aç.' },
  },
  {
    id: 'ppt-duplicate',
    app: 'powerpoint',
    action: { en: 'Duplicate', tr: 'Çoğalt' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
      tr: { win: ['Ctrl', 'D'], mac: ['Cmd', 'D'] },
    },
    description: { en: 'Duplicate selected object.', tr: 'Seçili nesneyi çoğalt.' },
  },
  {
    id: 'ppt-undo',
    app: 'powerpoint',
    action: { en: 'Undo', tr: 'Geri Al' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
      tr: { win: ['Ctrl', 'Z'], mac: ['Cmd', 'Z'] },
    },
    description: { en: 'Undo the last action.', tr: 'Son işlemi geri al.' },
  },
  {
    id: 'ppt-redo',
    app: 'powerpoint',
    action: { en: 'Redo', tr: 'Yinele' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
      tr: { win: ['Ctrl', 'Y'], mac: ['Cmd', 'Y'] },
    },
    description: { en: 'Redo the last undone action.', tr: 'Son geri alınan işlemi yinele.' },
  },
  {
    id: 'ppt-find',
    app: 'powerpoint',
    action: { en: 'Find', tr: 'Bul' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
      tr: { win: ['Ctrl', 'F'], mac: ['Cmd', 'F'] },
    },
    description: { en: 'Open Find dialog.', tr: 'Bul penceresini aç.' },
  },
  {
    id: 'ppt-replace',
    app: 'powerpoint',
    action: { en: 'Find & Replace', tr: 'Bul ve Değiştir' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
      tr: { win: ['Ctrl', 'H'], mac: ['Ctrl', 'H'] },
    },
    description: { en: 'Open Find and Replace dialog.', tr: 'Bul ve Değiştir penceresini aç.' },
  },
  {
    id: 'ppt-select-all',
    app: 'powerpoint',
    action: { en: 'Select All', tr: 'Tümünü Seç' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] },
      tr: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] },
    },
    description: { en: 'Select all objects on slide.', tr: 'Slayttaki tüm nesneleri seç.' },
  },
  {
    id: 'ppt-delete',
    app: 'powerpoint',
    action: { en: 'Delete', tr: 'Sil' },
    category: 'Editing',
    keys: {
      en: { win: ['Delete'], mac: ['Delete'] },
      tr: { win: ['Delete'], mac: ['Delete'] },
    },
    description: { en: 'Delete selected object.', tr: 'Seçili nesneyi sil.' },
  },
  {
    id: 'ppt-group',
    app: 'powerpoint',
    action: { en: 'Group Objects', tr: 'Nesneleri Grupla' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'G'], mac: ['Cmd', 'G'] },
      tr: { win: ['Ctrl', 'G'], mac: ['Cmd', 'G'] },
    },
    description: { en: 'Group selected objects.', tr: 'Seçili nesneleri grupla.' },
  },
  {
    id: 'ppt-ungroup',
    app: 'powerpoint',
    action: { en: 'Ungroup Objects', tr: 'Grubu Çöz' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'G'], mac: ['Cmd', 'Shift', 'G'] },
      tr: { win: ['Ctrl', 'Shift', 'G'], mac: ['Cmd', 'Shift', 'G'] },
    },
    description: { en: 'Ungroup selected objects.', tr: 'Seçili grubun grubunu çöz.' },
  },

  // ============================================
  // FORMATTING (Biçimlendirme)
  // ============================================
  {
    id: 'ppt-bold',
    app: 'powerpoint',
    action: { en: 'Bold', tr: 'Kalın' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'B'], mac: ['Cmd', 'B'] },
      tr: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] }, // Türkçe'de Ctrl+K = Kalın
    },
    description: { en: 'Apply bold formatting.', tr: 'Kalın biçimlendirme uygula.' },
  },
  {
    id: 'ppt-italic',
    app: 'powerpoint',
    action: { en: 'Italic', tr: 'İtalik' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
      tr: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
    },
    description: { en: 'Apply italic formatting.', tr: 'İtalik biçimlendirme uygula.' },
  },
  {
    id: 'ppt-underline',
    app: 'powerpoint',
    action: { en: 'Underline', tr: 'Altı Çizili' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'U'], mac: ['Cmd', 'U'] },
      tr: { win: ['Ctrl', 'A'], mac: ['Cmd', 'A'] }, // Türkçe'de Ctrl+A = Altı çizili
    },
    description: { en: 'Apply underline formatting.', tr: 'Altı çizili biçimlendirme uygula.' },
  },
  {
    id: 'ppt-increase-font',
    app: 'powerpoint',
    action: { en: 'Increase Font Size', tr: 'Yazı Boyutunu Artır' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '>'], mac: ['Cmd', 'Shift', '>'] },
      tr: { win: ['Ctrl', 'Shift', '>'], mac: ['Cmd', 'Shift', '>'] },
    },
    description: { en: 'Increase font size.', tr: 'Yazı boyutunu artır.' },
  },
  {
    id: 'ppt-decrease-font',
    app: 'powerpoint',
    action: { en: 'Decrease Font Size', tr: 'Yazı Boyutunu Azalt' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Shift', '<'], mac: ['Cmd', 'Shift', '<'] },
      tr: { win: ['Ctrl', 'Shift', '<'], mac: ['Cmd', 'Shift', '<'] },
    },
    description: { en: 'Decrease font size.', tr: 'Yazı boyutunu azalt.' },
  },
  {
    id: 'ppt-align-left',
    app: 'powerpoint',
    action: { en: 'Align Left', tr: 'Sola Hizala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
      tr: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
    },
    description: { en: 'Align text to the left.', tr: 'Metni sola hizala.' },
  },
  {
    id: 'ppt-align-center',
    app: 'powerpoint',
    action: { en: 'Align Center', tr: 'Ortala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'E'], mac: ['Cmd', 'E'] },
      tr: { win: ['Ctrl', 'E'], mac: ['Cmd', 'E'] },
    },
    description: { en: 'Center align text.', tr: 'Metni ortala.' },
  },
  {
    id: 'ppt-align-right',
    app: 'powerpoint',
    action: { en: 'Align Right', tr: 'Sağa Hizala' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
      tr: { win: ['Ctrl', 'R'], mac: ['Cmd', 'R'] },
    },
    description: { en: 'Align text to the right.', tr: 'Metni sağa hizala.' },
  },
  {
    id: 'ppt-justify',
    app: 'powerpoint',
    action: { en: 'Justify', tr: 'İki Yana Yasla' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'J'], mac: ['Cmd', 'J'] },
      tr: { win: ['Ctrl', 'J'], mac: ['Cmd', 'J'] },
    },
    description: { en: 'Justify text.', tr: 'Metni iki yana yasla.' },
  },
  {
    id: 'ppt-clear-formatting',
    app: 'powerpoint',
    action: { en: 'Clear Formatting', tr: 'Biçimlendirmeyi Temizle' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
      tr: { win: ['Ctrl', 'Space'], mac: ['Ctrl', 'Space'] },
    },
    description: { en: 'Remove all formatting.', tr: 'Tüm biçimlendirmeyi kaldır.' },
  },
  {
    id: 'ppt-font-dialog',
    app: 'powerpoint',
    action: { en: 'Font Dialog', tr: 'Yazı Tipi İletişim Kutusu' },
    category: 'Formatting',
    keys: {
      en: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
      tr: { win: ['Ctrl', 'T'], mac: ['Cmd', 'T'] },
    },
    description: { en: 'Open font dialog.', tr: 'Yazı tipi iletişim kutusunu aç.' },
  },

  // ============================================
  // SLIDES (Slaytlar)
  // ============================================
  {
    id: 'ppt-new-slide',
    app: 'powerpoint',
    action: { en: 'New Slide', tr: 'Yeni Slayt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'M'], mac: ['Cmd', 'Shift', 'N'] },
      tr: { win: ['Ctrl', 'M'], mac: ['Cmd', 'Shift', 'N'] },
    },
    description: { en: 'Insert a new slide.', tr: 'Yeni slayt ekle.' },
  },
  {
    id: 'ppt-duplicate-slide',
    app: 'powerpoint',
    action: { en: 'Duplicate Slide', tr: 'Slaytı Çoğalt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Shift', 'D'], mac: ['Cmd', 'Shift', 'D'] },
      tr: { win: ['Ctrl', 'Shift', 'D'], mac: ['Cmd', 'Shift', 'D'] },
    },
    description: { en: 'Duplicate current slide.', tr: 'Mevcut slaytı çoğalt.' },
  },
  {
    id: 'ppt-delete-slide',
    app: 'powerpoint',
    action: { en: 'Delete Slide', tr: 'Slaytı Sil' },
    category: 'Navigation',
    keys: {
      en: { win: ['Delete'], mac: ['Delete'] },
      tr: { win: ['Delete'], mac: ['Delete'] },
    },
    description: { en: 'Delete selected slide.', tr: 'Seçili slaytı sil.' },
  },
  {
    id: 'ppt-next-slide',
    app: 'powerpoint',
    action: { en: 'Next Slide', tr: 'Sonraki Slayt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Page Down'], mac: ['Fn', '↓'] },
      tr: { win: ['Page Down'], mac: ['Fn', '↓'] },
    },
    description: { en: 'Go to next slide.', tr: 'Sonraki slayta git.' },
  },
  {
    id: 'ppt-previous-slide',
    app: 'powerpoint',
    action: { en: 'Previous Slide', tr: 'Önceki Slayt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Page Up'], mac: ['Fn', '↑'] },
      tr: { win: ['Page Up'], mac: ['Fn', '↑'] },
    },
    description: { en: 'Go to previous slide.', tr: 'Önceki slayta git.' },
  },
  {
    id: 'ppt-first-slide',
    app: 'powerpoint',
    action: { en: 'First Slide', tr: 'İlk Slayt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'Home'], mac: ['Cmd', 'Home'] },
      tr: { win: ['Ctrl', 'Home'], mac: ['Cmd', 'Home'] },
    },
    description: { en: 'Go to first slide.', tr: 'İlk slayta git.' },
  },
  {
    id: 'ppt-last-slide',
    app: 'powerpoint',
    action: { en: 'Last Slide', tr: 'Son Slayt' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'End'], mac: ['Cmd', 'End'] },
      tr: { win: ['Ctrl', 'End'], mac: ['Cmd', 'End'] },
    },
    description: { en: 'Go to last slide.', tr: 'Son slayta git.' },
  },
  {
    id: 'ppt-go-to-slide',
    app: 'powerpoint',
    action: { en: 'Go to Slide', tr: 'Slayta Git' },
    category: 'Navigation',
    keys: {
      en: { win: ['Ctrl', 'G'], mac: ['Cmd', 'G'] },
      tr: { win: ['Ctrl', 'G'], mac: ['Cmd', 'G'] },
    },
    description: { en: 'Open Go to Slide dialog.', tr: 'Slayta Git penceresini aç.' },
  },

  // ============================================
  // SLIDESHOW (Slayt Gösterisi)
  // ============================================
  {
    id: 'ppt-start-slideshow',
    app: 'powerpoint',
    action: { en: 'Start Slideshow', tr: 'Slayt Gösterisini Başlat' },
    category: 'View',
    keys: {
      en: { win: ['F5'], mac: ['Cmd', 'Shift', 'Enter'] },
      tr: { win: ['F5'], mac: ['Cmd', 'Shift', 'Enter'] },
    },
    description: { en: 'Start slideshow from beginning.', tr: 'Slayt gösterisini baştan başlat.' },
  },
  {
    id: 'ppt-start-from-current',
    app: 'powerpoint',
    action: { en: 'Start from Current Slide', tr: 'Mevcut Slayttan Başlat' },
    category: 'View',
    keys: {
      en: { win: ['Shift', 'F5'], mac: ['Cmd', 'Enter'] },
      tr: { win: ['Shift', 'F5'], mac: ['Cmd', 'Enter'] },
    },
    description: { en: 'Start slideshow from current slide.', tr: 'Slayt gösterisini mevcut slayttan başlat.' },
  },
  {
    id: 'ppt-end-slideshow',
    app: 'powerpoint',
    action: { en: 'End Slideshow', tr: 'Slayt Gösterisini Bitir' },
    category: 'View',
    keys: {
      en: { win: ['Esc'], mac: ['Esc'] },
      tr: { win: ['Esc'], mac: ['Esc'] },
    },
    description: { en: 'End slideshow.', tr: 'Slayt gösterisini bitir.' },
  },
  {
    id: 'ppt-blank-screen',
    app: 'powerpoint',
    action: { en: 'Black/Blank Screen', tr: 'Siyah/Boş Ekran' },
    category: 'View',
    keys: {
      en: { win: ['B'], mac: ['B'] },
      tr: { win: ['B'], mac: ['B'] },
    },
    description: { en: 'Toggle black screen during slideshow.', tr: 'Slayt gösterisinde siyah ekran aç/kapat.' },
  },
  {
    id: 'ppt-white-screen',
    app: 'powerpoint',
    action: { en: 'White Screen', tr: 'Beyaz Ekran' },
    category: 'View',
    keys: {
      en: { win: ['W'], mac: ['W'] },
      tr: { win: ['W'], mac: ['W'] },
    },
    description: { en: 'Toggle white screen during slideshow.', tr: 'Slayt gösterisinde beyaz ekran aç/kapat.' },
  },
  {
    id: 'ppt-laser-pointer',
    app: 'powerpoint',
    action: { en: 'Laser Pointer', tr: 'Lazer İşaretçi' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
      tr: { win: ['Ctrl', 'L'], mac: ['Cmd', 'L'] },
    },
    description: { en: 'Toggle laser pointer in slideshow.', tr: 'Slayt gösterisinde lazer işaretçiyi aç/kapat.' },
  },
  {
    id: 'ppt-pen-mode',
    app: 'powerpoint',
    action: { en: 'Pen Mode', tr: 'Kalem Modu' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
      tr: { win: ['Ctrl', 'P'], mac: ['Cmd', 'P'] },
    },
    description: { en: 'Switch to pen during slideshow.', tr: 'Slayt gösterisinde kaleme geç.' },
  },
  {
    id: 'ppt-highlighter-mode',
    app: 'powerpoint',
    action: { en: 'Highlighter Mode', tr: 'Vurgulayıcı Modu' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
      tr: { win: ['Ctrl', 'I'], mac: ['Cmd', 'I'] },
    },
    description: { en: 'Switch to highlighter during slideshow.', tr: 'Slayt gösterisinde vurgulayıcıya geç.' },
  },
  {
    id: 'ppt-erase-drawing',
    app: 'powerpoint',
    action: { en: 'Erase Drawings', tr: 'Çizimleri Sil' },
    category: 'View',
    keys: {
      en: { win: ['E'], mac: ['E'] },
      tr: { win: ['E'], mac: ['E'] },
    },
    description: { en: 'Erase all drawings in slideshow.', tr: 'Slayt gösterisindeki tüm çizimleri sil.' },
  },
  {
    id: 'ppt-show-all-slides',
    app: 'powerpoint',
    action: { en: 'Show All Slides', tr: 'Tüm Slaytları Göster' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
      tr: { win: ['Ctrl', 'S'], mac: ['Cmd', 'S'] },
    },
    description: { en: 'Show all slides during slideshow.', tr: 'Slayt gösterisinde tüm slaytları göster.' },
  },

  // ============================================
  // INSERT (Ekle)
  // ============================================
  {
    id: 'ppt-insert-hyperlink',
    app: 'powerpoint',
    action: { en: 'Insert Hyperlink', tr: 'Köprü Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'K'], mac: ['Cmd', 'K'] },
      tr: { win: ['Ctrl', 'Alt', 'K'], mac: ['Cmd', 'K'] }, // Türkçe'de Ctrl+K kalın için kullanılıyor
    },
    description: { en: 'Insert a hyperlink.', tr: 'Köprü ekle.' },
  },
  {
    id: 'ppt-insert-comment',
    app: 'powerpoint',
    action: { en: 'Insert Comment', tr: 'Açıklama Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Ctrl', 'Alt', 'M'], mac: ['Cmd', 'Option', 'M'] },
      tr: { win: ['Ctrl', 'Alt', 'M'], mac: ['Cmd', 'Option', 'M'] },
    },
    description: { en: 'Insert a comment.', tr: 'Açıklama ekle.' },
  },
  {
    id: 'ppt-insert-textbox',
    app: 'powerpoint',
    action: { en: 'Insert Text Box', tr: 'Metin Kutusu Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'N', 'X'], mac: ['Alt', 'N', 'X'] },
      tr: { win: ['Alt', 'N', 'X'], mac: ['Alt', 'N', 'X'] },
    },
    description: { en: 'Insert a text box.', tr: 'Metin kutusu ekle.' },
  },
  {
    id: 'ppt-insert-shape',
    app: 'powerpoint',
    action: { en: 'Insert Shape', tr: 'Şekil Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'N', 'S', 'H'], mac: ['Alt', 'N', 'S', 'H'] },
      tr: { win: ['Alt', 'N', 'S', 'H'], mac: ['Alt', 'N', 'S', 'H'] },
    },
    description: { en: 'Insert a shape.', tr: 'Şekil ekle.' },
  },
  {
    id: 'ppt-insert-picture',
    app: 'powerpoint',
    action: { en: 'Insert Picture', tr: 'Resim Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'N', 'P'], mac: ['Alt', 'N', 'P'] },
      tr: { win: ['Alt', 'N', 'P'], mac: ['Alt', 'N', 'P'] },
    },
    description: { en: 'Insert a picture.', tr: 'Resim ekle.' },
  },
  {
    id: 'ppt-insert-table',
    app: 'powerpoint',
    action: { en: 'Insert Table', tr: 'Tablo Ekle' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
      tr: { win: ['Alt', 'N', 'T'], mac: ['Alt', 'N', 'T'] },
    },
    description: { en: 'Insert a table.', tr: 'Tablo ekle.' },
  },
  {
    id: 'ppt-insert-chart',
    app: 'powerpoint',
    action: { en: 'Insert Chart', tr: 'Grafik Ekle' },
    category: 'Data',
    keys: {
      en: { win: ['Alt', 'N', 'C'], mac: ['Alt', 'N', 'C'] },
      tr: { win: ['Alt', 'N', 'C'], mac: ['Alt', 'N', 'C'] },
    },
    description: { en: 'Insert a chart.', tr: 'Grafik ekle.' },
  },
  {
    id: 'ppt-insert-video',
    app: 'powerpoint',
    action: { en: 'Insert Video', tr: 'Video Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'N', 'V'], mac: ['Alt', 'N', 'V'] },
      tr: { win: ['Alt', 'N', 'V'], mac: ['Alt', 'N', 'V'] },
    },
    description: { en: 'Insert a video.', tr: 'Video ekle.' },
  },
  {
    id: 'ppt-insert-audio',
    app: 'powerpoint',
    action: { en: 'Insert Audio', tr: 'Ses Ekle' },
    category: 'General',
    keys: {
      en: { win: ['Alt', 'N', 'A'], mac: ['Alt', 'N', 'A'] },
      tr: { win: ['Alt', 'N', 'A'], mac: ['Alt', 'N', 'A'] },
    },
    description: { en: 'Insert audio.', tr: 'Ses ekle.' },
  },

  // ============================================
  // VIEW (Görünüm)
  // ============================================
  {
    id: 'ppt-normal-view',
    app: 'powerpoint',
    action: { en: 'Normal View', tr: 'Normal Görünüm' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'W', 'L'], mac: ['Alt', 'W', 'L'] },
      tr: { win: ['Alt', 'W', 'L'], mac: ['Alt', 'W', 'L'] },
    },
    description: { en: 'Switch to Normal view.', tr: 'Normal görünüme geç.' },
  },
  {
    id: 'ppt-slide-sorter',
    app: 'powerpoint',
    action: { en: 'Slide Sorter View', tr: 'Slayt Sıralayıcı Görünümü' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'W', 'I'], mac: ['Alt', 'W', 'I'] },
      tr: { win: ['Alt', 'W', 'I'], mac: ['Alt', 'W', 'I'] },
    },
    description: { en: 'Switch to Slide Sorter view.', tr: 'Slayt Sıralayıcı görünümüne geç.' },
  },
  {
    id: 'ppt-outline-view',
    app: 'powerpoint',
    action: { en: 'Outline View', tr: 'Ana Hat Görünümü' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'W', 'P', 'O'], mac: ['Alt', 'W', 'P', 'O'] },
      tr: { win: ['Alt', 'W', 'P', 'O'], mac: ['Alt', 'W', 'P', 'O'] },
    },
    description: { en: 'Switch to Outline view.', tr: 'Ana Hat görünümüne geç.' },
  },
  {
    id: 'ppt-notes-page',
    app: 'powerpoint',
    action: { en: 'Notes Page', tr: 'Notlar Sayfası' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'W', 'N'], mac: ['Alt', 'W', 'N'] },
      tr: { win: ['Alt', 'W', 'N'], mac: ['Alt', 'W', 'N'] },
    },
    description: { en: 'Switch to Notes Page view.', tr: 'Notlar Sayfası görünümüne geç.' },
  },
  {
    id: 'ppt-zoom-in',
    app: 'powerpoint',
    action: { en: 'Zoom In', tr: 'Yakınlaştır' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
      tr: { win: ['Ctrl', '+'], mac: ['Cmd', '+'] },
    },
    description: { en: 'Zoom in on slide.', tr: 'Slaytı yakınlaştır.' },
  },
  {
    id: 'ppt-zoom-out',
    app: 'powerpoint',
    action: { en: 'Zoom Out', tr: 'Uzaklaştır' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
      tr: { win: ['Ctrl', '-'], mac: ['Cmd', '-'] },
    },
    description: { en: 'Zoom out on slide.', tr: 'Slaytı uzaklaştır.' },
  },
  {
    id: 'ppt-fit-to-window',
    app: 'powerpoint',
    action: { en: 'Fit Slide to Window', tr: 'Slaytı Pencereye Sığdır' },
    category: 'View',
    keys: {
      en: { win: ['Ctrl', 'Alt', 'G'], mac: ['Cmd', 'Option', 'G'] },
      tr: { win: ['Ctrl', 'Alt', 'G'], mac: ['Cmd', 'Option', 'G'] },
    },
    description: { en: 'Fit slide to current window.', tr: 'Slaytı mevcut pencereye sığdır.' },
  },
  {
    id: 'ppt-gridlines',
    app: 'powerpoint',
    action: { en: 'Show/Hide Gridlines', tr: 'Kılavuz Çizgileri Göster/Gizle' },
    category: 'View',
    keys: {
      en: { win: ['Shift', 'F9'], mac: ['Shift', 'F9'] },
      tr: { win: ['Shift', 'F9'], mac: ['Shift', 'F9'] },
    },
    description: { en: 'Toggle gridlines visibility.', tr: 'Kılavuz çizgileri görünürlüğünü değiştir.' },
  },
  {
    id: 'ppt-guides',
    app: 'powerpoint',
    action: { en: 'Show/Hide Guides', tr: 'Kılavuzları Göster/Gizle' },
    category: 'View',
    keys: {
      en: { win: ['Alt', 'F9'], mac: ['Alt', 'F9'] },
      tr: { win: ['Alt', 'F9'], mac: ['Alt', 'F9'] },
    },
    description: { en: 'Toggle guides visibility.', tr: 'Kılavuz görünürlüğünü değiştir.' },
  },

  // ============================================
  // OBJECTS (Nesneler)
  // ============================================
  {
    id: 'ppt-bring-forward',
    app: 'powerpoint',
    action: { en: 'Bring Forward', tr: 'Öne Getir' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', ']'], mac: ['Cmd', ']'] },
      tr: { win: ['Ctrl', ']'], mac: ['Cmd', ']'] },
    },
    description: { en: 'Bring object forward.', tr: 'Nesneyi öne getir.' },
  },
  {
    id: 'ppt-send-backward',
    app: 'powerpoint',
    action: { en: 'Send Backward', tr: 'Arkaya Gönder' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', '['], mac: ['Cmd', '['] },
      tr: { win: ['Ctrl', '['], mac: ['Cmd', '['] },
    },
    description: { en: 'Send object backward.', tr: 'Nesneyi arkaya gönder.' },
  },
  {
    id: 'ppt-bring-to-front',
    app: 'powerpoint',
    action: { en: 'Bring to Front', tr: 'En Öne Getir' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Shift', ']'], mac: ['Cmd', 'Shift', ']'] },
      tr: { win: ['Ctrl', 'Shift', ']'], mac: ['Cmd', 'Shift', ']'] },
    },
    description: { en: 'Bring object to front.', tr: 'Nesneyi en öne getir.' },
  },
  {
    id: 'ppt-send-to-back',
    app: 'powerpoint',
    action: { en: 'Send to Back', tr: 'En Arkaya Gönder' },
    category: 'Editing',
    keys: {
      en: { win: ['Ctrl', 'Shift', '['], mac: ['Cmd', 'Shift', '['] },
      tr: { win: ['Ctrl', 'Shift', '['], mac: ['Cmd', 'Shift', '['] },
    },
    description: { en: 'Send object to back.', tr: 'Nesneyi en arkaya gönder.' },
  },
  {
    id: 'ppt-nudge-left',
    app: 'powerpoint',
    action: { en: 'Nudge Left', tr: 'Sola Kaydır' },
    category: 'Editing',
    keys: {
      en: { win: ['←'], mac: ['←'] },
      tr: { win: ['←'], mac: ['←'] },
    },
    description: { en: 'Move object slightly left.', tr: 'Nesneyi hafifçe sola kaydır.' },
  },
  {
    id: 'ppt-nudge-right',
    app: 'powerpoint',
    action: { en: 'Nudge Right', tr: 'Sağa Kaydır' },
    category: 'Editing',
    keys: {
      en: { win: ['→'], mac: ['→'] },
      tr: { win: ['→'], mac: ['→'] },
    },
    description: { en: 'Move object slightly right.', tr: 'Nesneyi hafifçe sağa kaydır.' },
  },
  {
    id: 'ppt-nudge-up',
    app: 'powerpoint',
    action: { en: 'Nudge Up', tr: 'Yukarı Kaydır' },
    category: 'Editing',
    keys: {
      en: { win: ['↑'], mac: ['↑'] },
      tr: { win: ['↑'], mac: ['↑'] },
    },
    description: { en: 'Move object slightly up.', tr: 'Nesneyi hafifçe yukarı kaydır.' },
  },
  {
    id: 'ppt-nudge-down',
    app: 'powerpoint',
    action: { en: 'Nudge Down', tr: 'Aşağı Kaydır' },
    category: 'Editing',
    keys: {
      en: { win: ['↓'], mac: ['↓'] },
      tr: { win: ['↓'], mac: ['↓'] },
    },
    description: { en: 'Move object slightly down.', tr: 'Nesneyi hafifçe aşağı kaydır.' },
  },

  // ============================================
  // REVIEW (İnceleme)
  // ============================================
  {
    id: 'ppt-spelling',
    app: 'powerpoint',
    action: { en: 'Spelling Check', tr: 'Yazım Denetimi' },
    category: 'Text',
    keys: {
      en: { win: ['F7'], mac: ['F7'] },
      tr: { win: ['F7'], mac: ['F7'] },
    },
    description: { en: 'Run spelling check.', tr: 'Yazım denetimini çalıştır.' },
  },
  {
    id: 'ppt-thesaurus',
    app: 'powerpoint',
    action: { en: 'Thesaurus', tr: 'Eş Anlamlılar Sözlüğü' },
    category: 'Text',
    keys: {
      en: { win: ['Shift', 'F7'], mac: ['Fn', 'Shift', 'F7'] },
      tr: { win: ['Shift', 'F7'], mac: ['Fn', 'Shift', 'F7'] },
    },
    description: { en: 'Open thesaurus.', tr: 'Eş anlamlılar sözlüğünü aç.' },
  },
];

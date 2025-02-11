import type { Strings } from "../strings";

export default {
  languages: {
    en_US: "Spanish (US)",
  },
  actions: {
    disable: "Desactivar",
    enable: "Activar",
    edit: "Editar",
    delete: "Eliminar",
    export_download: "Exportar/Descargar",
    render: "Renderizar",
    no: "No",
    yes: "Si",
    save_and_exit: "Guardar y salir",
    exit_without_saving: "Salir sin guardar",
    download: "Descargar",
  },
  generic: {
    app_title: "Creador de Mii",
    camera: "Cámara",
    useMouseOrTouch: "Usa el mouse o el touchpad para mover la cámara.",
    pose: "Pose",
    expression: "Expresión",
    render: "Renderizar",
    resolution_width: "Ancho",
    resolution_height: "Altura",
    camera_field_of_view: "FOV de Cámara",
  },
  alert: {
    audio_requires_action: {
      title: "Configura el audio",
      description:
        "La música empiezara a sonar en el primer click. Presiona V para cambiar el volumen del sonido (Predeterminado es 0.35)",
    },
    delete_confirmation: {
      title: "Advertencia",
      description: "¿Estás seguro de que quieres eliminar este Mii?",
    },
    choice: "¿Que quieres hacer?",
  },
  pages: {
    mainMenu: {
      title: "Menú Principal",
    },
    library: {
      title: "Librería Mii",
      options: "Opciones de Mii",
      credits: {
        title: "Créditos",
        view: "Ver créditos",
        // general credits
        datkat21: "Código fuente por datkat21",
        ariankordi: "API de Mii Rendering por ariankordi",
        objecty: "Música de Editor de Mii por objecty",
        // The localization author name credits are hardcoded into the app and use the language names specified at the top.
        localization: "%lang% por %author%",
        general: "General",
        translators: "Traductores",
      },

      export: {
        // this title is reused for export/download and render options
        title: "Exportar Mii",
        description: "¿Cómo quisieras guardar este Mii?",
        // for context, only "save" downloads a file here
        get_ffsd_hex: "Obtener FFSD (en Hex)",
        get_ffsd_b64: "Obtener FFSD (en Base64)",
        save_ffsd_file: "Guardar FFSD (como archivo)",
        save_miic_file: "Guardar formato de Mii Creator (Recomendado)",
        get_mii_studio_data: "Obtener datos de Mii Studio",
        ffsd_modal: "Código FFSD",
        mii_studio_data_modal: "Datos de Mii Studio",
        // begin render choices
        generate_qr: "Generar código QR",
        render_image: "Renderizar una imagen",
        render_headshot: "Foto de rostro",
        render_full_body: "Cuerpo completo",
        render_head_only: "Solo cabeza",
        // subject to change
        custom_render: "Renderizado libre",
      },
      custom_render: {
        title: "Preparar render",
        head: "Cabeza",
        full_body: "Cuerpo completo",
        // You don't have to translate these as they are temporary!
        pose_unfinished_warning:
          "Esta sección esta sin terminar, las poses fueron customizadas a mano, así que no es preciso. La pose 3 también tiene un problema con la rotación de la cabeza ya que fue cambiada para pretender que estaba pegada al cuerpo para prevenir errores de escala. Nada esta completo después de la pose 4. Trabajo en una forma de añadir las poses de Wii U.",
        render_unfinished_warning:
          "Las opciones de renderizado serán mostradas cuando la opción este completa.",
        idle: "Libre",
        pose: "Pose %n%",
      },
    },
    editor: {
      choice: {
        color: "Color",
        favorite: "Favorito",
        gender: "Genéro",
        goatee: "Perilla/Chivo",
        hat_color: "Color de sombrero",
        hat: "Sombrero",
        mustache: "Bigote",
        normal: "Normal",
        position: "Posición",
        special: "Especial",
        type: "Tipo",
      },
      quit: {
        title: "Quitando el editor",
        description_no_changes:
          "No se hicieron cambios. ¿Estás seguro de que quieres salir?",
        description_changes_made: "Vas a salir. ¿Te gustaría guardar los cambios realizados?",
      },
      warning_custom: `%custom% is a CUSTOM property, and will not transfer to any other data formats.
It is purely visual and provided for the ability to use in renders.`,
    },
    saveData: {
      title: "Save Data",
      import: "Import Save Data",
      export: "Export Save Data",
    },
    settings: {
      title: "Settings",
      // Settings
      settings_bgm: "Background Music",
      settings_sfx: "Sound Effects",
    },
  },
} as Strings;

i18n.map('pl', {
  global: {
    save: 'Zapisz',
    create: 'Utwórz',
    logout: 'Wyloguj',
    back: 'Cofnij',
    cancel: 'Anuluj',
    delete: 'Usuń',
    confirm: 'Potwierdź',
    choose: 'Wybierz',
    noPermission: 'Nie masz uprawnień',
    passwordNotMatch: 'Hasła nie są identyczne',
    optional: 'Nieobowiązkowe'
  },
  accounts: {
    schema: {
      emails: {
        title: 'Emaile',
        address: 'Adres',
        verified: 'Zweryfikowany'
      },
      password: {
        title: 'Hasło',
        new: 'Nowe hasło',
        confirm: 'Potwierdź hasło'
      },
      profile: {
        name: 'Nazwa użytkownika'
      }
    },
    index: {
      title: 'Konta',
      noName: 'Brak nazwy',
      actions: {
        edit: 'Edytuj',
        sendEnrollmentEmail: 'Wyślij zaproszenie'
      },
      tableTitles: {
        name: 'Nazwa użytkownika',
        services: 'Sposób logowania',
        email: 'Email',
        roles: 'Role',
        actions: 'Akcje'
      }
    },
    update: {
      title: 'Edytuj konto',
      messages: {
        noPermissions: 'Nie masz uprawnień by edytować tego użytkownika'
      },
      sections: {
        profile: {
          title: 'Profil'
        },
        roles: {
          title: 'Role',
          selectRoles: 'Wybierz role użytkownika'
        },
        changePassword: {
          title: 'Zmień hasło'
        },
        deleteUser: {
          title: 'Uwaga',
          advice: 'Usunięcie użytkownika może spowodować problemy.',
          button: 'Usuń użytkownika'
        }
      }
    },
    myAccount: {
      title: 'Moje konto',
    },
    create: {
      title: 'Nowy użytkownik',
      createInvitation: 'Wyślij zaproszenie',
      createUserNow: 'Utwórz użytkownika',
      inviteOther: 'Kolejne zaproszenie',
      selectRoles: 'Wybierz nowe role użytkownika',
      email: 'Email',
      messages: {
        successfullyCreated: 'Zaproszenie wysłane'
      }
    },
    changePassword: {
      title: 'Zmień hasło',
    },
    updateProfile: {
      title: 'Edytuj profil',
    },
    register: {
      title: 'Zarejestruj się',
      registerButton: 'Zarejestruj się',
      fields: {
        email: 'Email',
        name: 'Nazwa użytkownika',
        password: 'Hasło',
        confirmPassword: 'Hasło (ponownie)'
      },
      messages: {
        invalidEmail: 'Niewłaściwy adres email',
        invalidInvitationCode: 'Niewłaściwy kod zaproszenia',
      }
    }
  },
  collections: {
    create: {
      title: 'Utwórz {$1}'
    },
    update: {
      title: 'Edytuj {$1}'
    },
    delete: {
      title: 'Usuń {$1}',
      confirmQuestion: 'Czy na pewno chcesz usunąć {$1}?'
    },
    common: {
      defaultPluralName: 'pozycje',
      defaultSingularName: 'pozycja',
    }
  },
  config: {
    update: {
      title: 'Konfiguracja',
    }
  },
  dictionary: {
    update: {
      title: 'Słownik'
    }
  },
  filesystem: {
    messages: {
      notFound_id: 'Plik nie został znaleziony [{$i}]',
      errorUploading: 'Błąd przy zapisie pliku',
      errorRemoving: 'Błąd przy usuwaniu pliku',
    }
  },
  pages: {
    schema: {
      title: 'Tytuł',
      url: 'Url',
    },
    index: {
      title: 'Strony',
    },
    create: {
      title: 'Utwórz stronę',
      chooseTemplate: 'Wybierz szablon'
    },
    update: {
      title: 'Edytuj stronę',
    },
    delete: {
      title: 'Usuń stronę',
      confirmQuestion: 'Czy na pewno chcesz usunąć tę stronę?'
    }
  },
  attributes: {
    users: {
      pluralName: 'użytkownicy',
      singularName: 'użytkownik',
    },
    file: {
      choose: 'Wybierz plik',
      noFile: 'Brak pliku',
    },
    image: {
      choose: 'Wybierz obraz'
    },
    images: {
      choose: 'Wybierz obrazy',
      clickToRemove: 'Kliknij, aby usunąć'
    }
  },
  tabular: {
    search: 'Szukaj:',
    info: 'Wyświetlanie od _START_ do _END_ z _TOTAL_ pozycji',
    infoEmpty: 'Wyświetlanie od 0 do 0 z 0 pozycji',
    lengthMenu: 'Pokaż pozycje: _MENU_',
    emptyTable: 'Brak dostępnych danych w tablicy',
    paginate: {
      first: 'Pierwsza',
      previous: 'Poprzednia',
      next: 'Następna',
      last: 'Ostatnia',
    }
  }
});

procedure get_item (
    itm_cv IN OUT ItmCurTyp,
    usr in varchar2,
    itm in varchar2)
is
    open itm_cv for ' SELECT * FROM items WHERE ' ||
            'owner = '''|| usr ||
            ' AND itemname = ''' || itm || '''';
end get_item;
